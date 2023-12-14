import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import botImage from '../assets/images/bot.png'
import Features from '../components/Features';
import { dummyMessages } from '../constants/Index.js'
import loadingBtn from '../assets/images/loading.gif'
import voiceLoadingBtn from '../assets/images/voiceLoading.gif'
import recordingBtn from '../assets/images/recordingIcon.png'

const HomeScreen = () => {
    const [result, setResult] = useState('');
    const [recording, setRecording] = useState(false);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState(dummyMessages);
    const [speaking, setSpeaking] = useState(true);
    const scrollViewRef = useRef();

    const clear = () => {
        setMessages([]);
    }
    const stopSpeaking = () => {
        setSpeaking(false);
    }


    return (
        <View className="flex-1 bg-white">
            {/* <StatusBar barStyle="dark-content" /> */}
            <SafeAreaView className="flex-1 flex mx-5">
                {/* bot icon */}
                <View className="flex-row justify-center my-2">
                    <Image
                        source={botImage}
                        style={{ height: hp(15), width: hp(15) }}
                    />
                </View>
                {/* features || message history */}
                {
                    messages.length > 0 ? (
                        <View className="space-y-2 flex-1">
                            <Text className="text-gray-700 font-semibold ml-1" style={{ fontSize: wp(5) }}>Assistant</Text>

                            <View
                                style={{ height: hp(58) }}
                                className="bg-neutral-200 rounded-3xl p-4">
                                <ScrollView
                                    // ref={scrollViewRef}
                                    bounces={false}
                                    className="space-y-4"
                                    showsVerticalScrollIndicator={false}
                                >
                                    {
                                        messages.map((message, index) => {
                                            if (message.role == 'assistant') {
                                                if (message.content.includes('https')) {
                                                    // its an ai image
                                                    return (
                                                        <View key={index} className="flex-row justify-start">
                                                            <View
                                                                className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                                                                <Image
                                                                    source={{ uri: message.content }}
                                                                    className="rounded-2xl"
                                                                    resizeMode="contain"
                                                                    style={{ height: wp(60), width: wp(60) }}
                                                                />
                                                            </View>
                                                        </View>
                                                    )
                                                } else {
                                                    // text response
                                                    return (
                                                        <View key={index} style={{ width: wp(70) }}
                                                            className="bg-emerald-100 rounded-xl p-2 rounded-tl-none"
                                                        >
                                                            <Text>{message.content}</Text>
                                                        </View>
                                                    )
                                                }
                                            } else {
                                                // user input
                                                return (
                                                    <View key={index} className="flex-row justify-end">
                                                        <View style={{ width: wp(70) }}
                                                            className="bg-white rounded-xl p-2 rounded-tr-none"
                                                        >
                                                            <Text>{message.content}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                        })
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    ) : (
                        <Features />
                    )
                }



                {/* recording, clear and stop buttons */}
                <View className="flex justify-center items-center">
                    {
                        loading ? (
                            <Image
                                source={loadingBtn}
                                style={{ width: hp(10), height: hp(10) }}
                            />
                        ) :
                            recording ? (
                                <TouchableOpacity className="space-y-2"
                                // onPress={stopRecording}
                                >
                                    {/* recording stop button */}
                                    <Image
                                        className="rounded-full"
                                        source={voiceLoadingBtn}
                                        style={{ width: hp(10), height: hp(10) }}
                                    />
                                </TouchableOpacity>

                            ) : (
                                <TouchableOpacity
                                //  onPress={startRecording}
                                >
                                    {/* recording start button */}
                                    <Image
                                        className="rounded-full"
                                        source={recordingBtn}
                                        style={{ width: hp(10), height: hp(10) }}
                                    />
                                </TouchableOpacity>
                            )
                    }
                    {
                        messages.length > 0 && (
                            <TouchableOpacity
                                onPress={clear}
                                className="bg-neutral-400 rounded-3xl p-2 absolute right-10"
                            >
                                <Text className="text-white font-semibold">Clear</Text>
                            </TouchableOpacity>
                        )
                    }
                    {
                        speaking && (
                            <TouchableOpacity
                                onPress={stopSpeaking}
                                className="bg-red-400 rounded-3xl p-2 absolute left-10"
                            >
                                <Text className="text-white font-semibold">Stop</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </SafeAreaView>
        </View>

    )
}
export default HomeScreen
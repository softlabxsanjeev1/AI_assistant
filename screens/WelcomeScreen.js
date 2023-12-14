import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import welcomeImage from '../assets/images/welcome.gif'


const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 flex justify-around bg-white my-4">
            {/* title */}
            <View className="space-y-2">
                <Text style={{ fontSize: wp(10) }} className="text-center font-bold text-gray-700">
                    Jivika
                </Text>
                <Text style={{ fontSize: wp(5) }} className="text-center tracking-wider font-semibold text-gray-600">
                    Powerd by WEBTECH007 🏆🎖🏆.
                </Text>
            </View>

            {/* assistant image */}
            <View className="flex-row justify-center rounded-full">
                <Image className='mx-5'
                    source={welcomeImage}
                    style={{ height: wp(90), width: wp(100) }}
                />
            </View>

            {/* start button */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-emerald-600 mx-5 p-4 rounded-2xl">
                <Text style={{ fontSize: wp(6) }} className="text-center font-bold text-white">
                    Get Started
                </Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

export default WelcomeScreen


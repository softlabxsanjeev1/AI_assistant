import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import WelcomeScreen from '../screens/WelcomeScreen'

const Navigations = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
        </Stack.Navigator>

    )
}

export default Navigations
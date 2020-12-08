import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './DrawerNavigation';
import Login from '../screens/Login';

const LoginSwich = createStackNavigator();
const Navigator = () => {
    return (
        <LoginSwich.Navigator
            initialRouteName="SignIn"
            screenOptions={{
                headerShown: false,
                title: 'Centered',
                headerTitleAlign: 'center'
            }}
        >
            <LoginSwich.Screen
                name="Home"
                component={DrawerNav}
            />
            <LoginSwich.Screen
                name="SignIn"
                component={Login}
            />
        </LoginSwich.Navigator>
    );
}
export default Navigator;
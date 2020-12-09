import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './DrawerNavigation';
import Login from '../screens/Login';
import LoginContainer from '../screens/Login/LoginContainer';

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
                component={LoginContainer}
            />
        </LoginSwich.Navigator>
    );
}
export default Navigator;
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetails from '../screens/ProductDetails';

const AuthNav = createStackNavigator();
const AppStack = () => {
    return (
        <AuthNav.Navigator
            initialRouteName="Products"
            screenOptions={{
                headerShown: true,
                title: 'Centered',
                headerTitleAlign: 'center'
            }}
        >
            <AuthNav.Screen
                name="Products"
                component={ProductsScreen}
            />
            <AuthNav.Screen
                name="AlertList"
                component={ProductDetails}
                options={({ route }) => ({ title: route.params.view })}
            />
        </AuthNav.Navigator>
    );
}

export default AppStack;
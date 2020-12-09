import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../screens/ProductDetails';
import ProductsScreen from '../screens/Products/ProductsView';

const AuthNav = createStackNavigator();
const AppStack = () => {
    return (
        <AuthNav.Navigator
            initialRouteName="Products"
            screenOptions={{
                headerShown: false,
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
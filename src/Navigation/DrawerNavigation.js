import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppNavigation';
import CustomSideBar from "../components/CustomDrawer/CustomSideBar";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomSideBar {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={AppStack}
                screenOptions={{
                    headerShown: true,
                    title: 'Centered',
                    headerTitleAlign: 'center'
                }}
            />
        </Drawer.Navigator>
    );


}
export default DrawerNav;
import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    listItem: {
        height: 56,
        backgroundColor: 'orange',
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    listItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 16,
        color: '#fff'
    },
    listWithIcon: {
        paddingLeft: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullScreen: { flex: 1 },
    logoStyle: {
        width: '100%',
        // height: 48
    },
    drawerHeader: {
        paddingTop: Platform.OS === "ios" ? 32 : 0,
        backgroundColor: '#fff',
        // paddingVertical: 16
    }
})
export default styles;
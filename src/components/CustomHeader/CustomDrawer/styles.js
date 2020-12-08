import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    listItem: {
        height: 56,
        backgroundColor: '#36301A',
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    listItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 16,
        color:'#fff'
    },
    footerButton: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    logOutButton: {
        height: 56,
        backgroundColor: '#535552',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    logoutText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 16,
        color:'#fff'

    },
    listWithIcon:{
        paddingLeft:16,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    fullScreen:{ flex: 1 }
})
export default styles;
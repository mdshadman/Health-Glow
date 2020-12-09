import React, { Component, useEffect, useState } from 'react';
import {

    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
const CustomActionsheet = ({ modalVisible, setModalVisible, productData, sortProducts }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {productData && productData.sorts && productData.sorts.map((categ, index) => {
                        return (
                            <View style={styles.drawerView} key={categ.name}>
                                <TouchableOpacity key={index} onPress={() => sortProducts(categ.orders)} style={styles.openButton}>
                                    <Text style={styles.textStyle}>{categ.text}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                    }
                </View>

                <TouchableOpacity
                    onPress={setModalVisible}
                    style={styles.footerButton}>
                    <Text style={styles.footerText}>{"Back"}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );

}

export default CustomActionsheet;
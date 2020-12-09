import React, { Component, useEffect, useState } from 'react';
import {

    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../CustomHeader/CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
const FilterModal = ({ modalVisible, setModalVisible, productData, applyFilter }) => {
    const [catType, setCatType] = useState([]);
    const [seletedCategory, setSelectCategory] = useState("category");
    const [filterRightData, setFilterRightData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        if (Array.isArray(productData.aggregations)) {
            const rightFilter = productData.aggregations.find((fl) => {
                if (seletedCategory === fl.name) {
                    return fl.buckets
                }
            });
            if (rightFilter && rightFilter.buckets) {
                setFilterRightData(rightFilter.buckets);
            }
        }
    }, [productData]);

    const setCategory = (categ) => {
        setSelectCategory(categ.name);
        const rightFilter = productData && productData.aggregations && productData.aggregations.find((fl) => {
            if (categ.name === fl.name) {
                return fl.buckets
            }
        })
        setFilterRightData(rightFilter.buckets);
    };
    const selectCategType = (val) => {
        setCatType(val)
        const definedData = {
            seletedCategory,
            val
        }
        setFilterData(pre => [...pre, definedData]);
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <CustomHeader
                    leftOnPress={setModalVisible}
                    IconName={"close"}

                />
                <View style={styles.modalView}>
                    <ScrollView scrollEnabled style={styles.scrollStyle}>
                        {productData && productData.aggregations && productData.aggregations.map((categ, index) => {
                            return (
                                <View style={styles.drawerView} key={categ.name}>
                                    <View style={styles.leftSide}>
                                        <TouchableOpacity key={index} onPress={() => setCategory(categ)} style={styles.openButton}>
                                            <Text style={styles.textStyle}>{categ.text}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                        }
                    </ScrollView>

                    <View style={styles.rightView}>
                        <ScrollView scrollEnabled style={styles.scrollStyle}>
                            {Array.isArray(filterRightData) && filterRightData.map((buk, i) => {
                                return (
                                    <TouchableOpacity key={i} onPress={() => selectCategType(buk.text)} style={styles.openButton1}>
                                        <View style={styles.rightButtons}>
                                            <View style={styles.rightButtons}>
                                                {buk.colorCode ? <View style={[styles.emptyView, { backgroundColor: buk.colorCode }]} /> : null}
                                                <Text style={styles.textStyle}>{buk.text}{buk.showDocCount && buk.docCount ? ` (${buk.docCount})` : null}</Text>
                                            </View>

                                            <Icon name={"checkmark-circle"} size={20} color={buk.text == catType ? "orange" : "black"} />
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                            }
                        </ScrollView>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => applyFilter(filterData)}
                    style={styles.footerButton}>
                    <Text style={styles.footerText}>{"Apply"}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );

}

export default FilterModal;
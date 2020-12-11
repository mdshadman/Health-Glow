import React, { Component, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import CustomActionsheet from '../../components/CustomActionsheet/CustomActionsheet';
import FilterModal from '../../components/FilterModal/FilterModal';
import GridView from '../../components/GridView/GridView';
import ExpandedListView from '../../components/ListView/ListView';
import ProductHeader from '../../components/ProductHeader/ProductHeader';
import { getFilteredProductsList, getProductsList } from '../../redux/actions/actions';
import styles from './style'
const ProductsScreen = ({
    navigation,
    state: { AllProducts, loader, productDetail },
    dispatch: {
        getProductsList,
        getFilterdProductList
    }
}) => {
    const healthLogo = require("../../images/logoHealth.png")
    const [viewMode, setViewMode] = useState(false);
    const [products, setProducts] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [modalVisible, setModalvisible] = useState(false);
    const [actionVisible, setActionvisible] = useState(false);

    const [isDataFilter, setIsDataFilter] = useState(false);
    const ref = useRef(0)
    useEffect(() => {
        navigation.addListener("focus", () => {
            getProductsList(ref.current);
        });
    }, []);

    useEffect(() => {
        setProducts(AllProducts.products);
    }, [AllProducts.products])
    const leftOnPress = () => {
        navigation.toggleDrawer();
    };

    const changeViewMode = () => {
        setViewMode(!viewMode)
    };
    const renderView = (item) => {
        return (
            <View  >
                {viewMode ? <ExpandedListView products={item} /> : <GridView products={item} />}
            </View>
        )
    };

    const setModalOn = () => {
        setModalvisible(!modalVisible);
        setIsDataFilter(false)
    }
    const setActionOn = () => {
        if (productDetail && productDetail.sorts) {
            setActionvisible(!actionVisible);
            setIsDataFilter(false)
        } else {
            Alert.alert(" OOps Something went wrong !", "Can not sort this product, please try again later.")
        }
    }
    const receivedCategory = (val) => {
    }
    const applyFilter = (data) => {
        let fill = "";
        data.forEach((item, index) => {
            item.seletedCategory
            let query = `${item.seletedCategory}=${item.val}`;
            fill = fill + "&" + query;
            //
            if (data.length === index + 1) {
                getFilterdProductList(ref.current, fill);
                setIsDataFilter(true)
                setModalvisible(!modalVisible)
            }
        });
    }
    const applySort = (data) => {
        let fill = "";
        data.forEach((item, index) => {
            item.seletedCategory
            let query = `${item.key}:${item.order}`;
            fill = fill + "&sort=" + query;
            //
            if (data.length === index + 1) {
                // api calls
                getFilterdProductList(ref.current, fill);
                setIsDataFilter(true)
                setActionvisible(!actionVisible)
            }
        });
    }
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: "#ffffff",
        }}>
            <ProductHeader
                IconName={"menu"}
                leftOnPress={leftOnPress}
                imgSrc={healthLogo}
                rightIconPress={leftOnPress}
                rightIconPress1={leftOnPress}
                rightIconPress2={leftOnPress}
                rightIconName={"bookmark-outline"}
                rightIconName1={"search-outline"}
                rightIconName2={"cart-outline"}
                changeViewMode={changeViewMode}
                totalCount={productDetail.totalCount}
                productTitle={productDetail.title ? productDetail.title : "Total"}
                filterProducts={setModalOn}
                sortProducts={setActionOn}
            />
            <View style={styles.flatViewCont}>
                {loader ? <ActivityIndicator size="large" color="orange" style={{ position: 'absolute', top: '50%', alignSelf: 'center' }} /> :
                    <FlatList
                        style={{ paddingTop: 0, }}
                        data={isDataFilter ? products.reverse() : products}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.flatContainer}
                        renderItem={({ item, index }) => { return renderView(item, index) }}
                        columnWrapperStyle={{ flexWrap: "wrap" }}
                        numColumns={2}
                        onScrollEndDrag={() => console.log(" *********endShadman")}
                        onScrollBeginDrag={() => console.log(" *******startShadman")}
                        initialNumToRender={4}
                        maxToRenderPerBatch={1}
                        onEndReachedThreshold={0.5}
                        onEndReached={({ distanceFromEnd }) => {
                            console.log(" ***************** ", ref.current);
                            let totatcount = ref.current = ref.current + 1
                            getProductsList(totatcount);
                        }}
                    />
                }
            </View>
            <FilterModal
                modalVisible={modalVisible}
                setModalVisible={setModalOn}
                productData={productDetail}
                setCategory={receivedCategory}
                applyFilter={applyFilter}
            />
            <CustomActionsheet
                modalVisible={actionVisible}
                setModalVisible={setActionOn}
                productData={productDetail}
                sortProducts={applySort}
            />
        </SafeAreaView>

    );
}
const mapStateToProps = (state) => {
    return {
        state: {
            AllProducts: state.productList,
            loader: state.productList.loading,
            productDetail: state.productList.productDetail
        }
    }
}
const mapDispatchToProps = (dispatch) => ({

    dispatch: {
        getProductsList: (pageCount) => dispatch(getProductsList(pageCount)),
        getFilterdProductList: (pageCount, filterPart) => dispatch(getFilteredProductsList(pageCount, filterPart))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
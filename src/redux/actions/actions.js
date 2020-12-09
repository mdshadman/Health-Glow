import { PRODUCTS_LIST_URL } from "../api/apiConfig";
import { getFilteredProducts, getProducts } from "../api/health";
import { GET_PRODUCTS_LIST_BEGIN, GET_PRODUCTS_LIST_FAILED, GET_PRODUCTS_LIST_SUCCESS } from "./actionTypes";

export function getProductsStart() {
    return {
        type: GET_PRODUCTS_LIST_BEGIN,
        loading: true
    }
}
export function getProductsSuccess(data) {
    return {
        type: GET_PRODUCTS_LIST_SUCCESS,
        payload: data,

    }
}
export function getProductsFailed(data) {
    return {
        type: GET_PRODUCTS_LIST_FAILED,
        payload: data
    }
}

export function getProductsList(pageCount) {
    return async dispatch => {
        try {
            dispatch(getProductsStart());
            getProducts(PRODUCTS_LIST_URL, pageCount).then((response) => {
                if (response["data"]["message"] === "Success")
                    dispatch(getProductsSuccess(response["data"]["data"]))
            }).catch((err) => {
                dispatch(getProductsFailed(err))
            })
        } catch (err) {
            dispatch(getProductsFailed(err))
        }
    }
}
export function getFilteredProductsList(pageCount, filterPart) {
    return async dispatch => {
        try {
            dispatch(getProductsStart());
            getFilteredProducts(PRODUCTS_LIST_URL, pageCount, filterPart).then((response) => {
                if (response["data"]["message"] === "Success")
                    dispatch(getProductsSuccess(response["data"]["data"]))
            }).catch((err) => {
                dispatch(getProductsFailed(err))
            })
        } catch (err) {
            dispatch(getProductsFailed(err))
        }
    }
}
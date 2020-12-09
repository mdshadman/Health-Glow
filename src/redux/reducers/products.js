import { GET_PRODUCTS_LIST_BEGIN, GET_PRODUCTS_LIST_FAILED, GET_PRODUCTS_LIST_SUCCESS } from "../actions/actionTypes";

const initialstate = {
    loading: false,
    products: [],
    error: "",
    productDetail: []
}

export function productsReducer(state = initialstate, action) {
    switch (action.type) {
        case GET_PRODUCTS_LIST_BEGIN:
            return { ...state, loading: true };
        case GET_PRODUCTS_LIST_SUCCESS:
            return {
                ...state,
                products: [...state.products, ...action.payload.products],
                productDetail: action.payload,
                loading: false
            };
        case GET_PRODUCTS_LIST_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state
    }
}
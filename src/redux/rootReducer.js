const { combineReducers } = require("redux");
const { productsReducer } = require("./reducers");

const rootReducer = combineReducers({
    productList: productsReducer
})
export default rootReducer;
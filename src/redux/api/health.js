import Axios from "axios"

export const getProducts = (url, pageCount) => {
    const exactUrl = url + `${pageCount}:20`
    return Axios.get(exactUrl)
}
export const getFilteredProducts = (url, pageCount, filterPart) => {
    const exactUrl = url + `${pageCount}:20` + filterPart
    return Axios.get(exactUrl);
}
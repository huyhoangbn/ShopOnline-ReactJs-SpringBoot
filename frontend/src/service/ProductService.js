import axios from 'axios'

const PRODUCT_API_LIST_URL = "http://localhost:8889/product/getListProduct"

class ProductService {
    getProduct(){
        return axios.get(PRODUCT_API_LIST_URL);
    }
}
export default new ProductService()


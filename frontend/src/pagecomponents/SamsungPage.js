import React, { Component } from 'react'
import Footer from '../components/Footer'
import callApi from '../utils/apiCaller'
import Product from '../components/Product'
import Products from '../components/Products'

class SamsungPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productSS: []
        }
    }

    componentDidMount() {
        callApi('product/getListProductSS', 'GET', null).then(res => {
            this.setState({
                productSS: res.data,
            });
        });
    }

    render() {
        var {productSS} = this.state;
        return (
            <div className="container">
                <div>
                <Products>
                    {this.showProducts(productSS)}
                </Products>  
              
                 </div>
                 <Footer/>
            </div>
        )
    }
    showProducts(productSS) {
    
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (productSS.length > 0) {
            result = productSS.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            });
        
        }
        return result;
    }
}

export default SamsungPage

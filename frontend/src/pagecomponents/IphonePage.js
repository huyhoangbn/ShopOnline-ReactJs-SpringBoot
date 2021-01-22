import React, { Component } from 'react'
import Footer from '../components/Footer'
import callApi from '../utils/apiCaller'
import Product from '../components/Product'
import Products from '../components/Products'

class IphonePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productIphone: []
        }
    }

    componentDidMount() {
        callApi('product/getListProductIphone', 'GET', null).then(res => {
            this.setState({
                productIphone: res.data,
            });
        });
    }

    render() {
        var {productIphone} = this.state;
        return (
            <div className="container">
                <div>
                <Products>
                    {this.showProducts(productIphone)}
                </Products>  
                 </div>
                 <Footer/>
            </div>
        )
    }
    showProducts(productIphone) {
    
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (productIphone.length > 0) {
            result = productIphone.map((product, index) => {
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

export default IphonePage

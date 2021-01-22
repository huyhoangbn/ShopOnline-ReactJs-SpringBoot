import React, { Component } from 'react'
import Footer from '../components/Footer'
import callApi from '../utils/apiCaller'
import Product from '../components/Product'
import Products from '../components/Products'

class OppoPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productOppo: []
        }
    }

    componentDidMount() {
        callApi('product/getListProductOppo', 'GET', null).then(res => {
            this.setState({
                productOppo: res.data,
            });
        });
    }

    render() {
        var {productOppo} = this.state;
        return (
            <div className="container">
                <div>
                <Products>
                    {this.showProducts(productOppo)}
                </Products>  
              
                 </div>
                 <Footer/>
            </div>
        )
    }
    showProducts(productOppo) {
    
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (productOppo.length > 0) {
            result = productOppo.map((product, index) => {
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

export default OppoPage

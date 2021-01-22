import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';
import callApi from '../utils/apiCaller'


class ProductsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            products: []
        }
    }

    componentDidMount() {
        callApi('product/getListProduct', 'GET', null).then(res => {
            this.setState({
                pageNumber: (res.data.length % 6 === 0) ? res.data.length / 6 : ((res.data.length - res.data.length % 6) / 6 + 1)
            });
        });
    }
    
    render() {
        var { products } = this.state;
        var page = this.props.page;
        return (
            <div>
                <Products>
                    {this.showProducts(products,page)}
                </Products>  
              
            </div>
        );
    }

    
    showProducts(products,page) {
        callApi(`product/getListProduct/${page}`, 'GET', null).then(res => {
            this.setState({
                products: res.data
            });
        });

        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
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


ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

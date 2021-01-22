import React, { Component } from 'react';
import * as Message from './../constants/Message';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: 500,
            height: 400
        }
    }
    componentDidMount(){
    
    }

    render() {
        var { product } = this.props;
    
        return (
            <div className="col-lg-4 col-md-8 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1" >
                        <img src={ product.image }
                            className="img-fluid" 
                            alt={product.name}  
                            style={{width: "100%",height:"auto"}}
                            
                            />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{ product.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                { this.showRatings(product.rating) }
                            </li>
                        </ul>
                        <p className="card-text">
                            { product.description }
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a 
                                    className="btn-floating blue-gradient" 
                                    data-toggle="tooltip" data-placement="top" 
                                    title="" 
                                    data-original-title="Add to Cart"
                                    onClick={ () => this.onAddToCart(product) }
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onAddToCart = (product) => {
        if(localStorage.getItem('token') === "null"){
            alert('Bạn phải đăng nhập mới thực hiện được chức năng này!')
        }else{
            console.log(localStorage.getItem('token'))
            this.props.onAddToCart(product);
            this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
            alert('Thêm vào giỏ hàng thành công!')
        }
    }

    showRatings(rating){
        var result = [];
        for(var i = 1;i <= rating;i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for(var j = 1; j <= (5-rating);j++){
            result.push(<i key={j+5} className="fa fa-star-o"></i>);
        }
        return result;
    }

}

export default Product;
import React, { Component } from 'react'
import CartContainer from '../containers/CartContainer'
import MessageContainer from '../containers/MessageContainer'

class CartPage extends Component {
    render() {
        return (
            <div className="container">
                <MessageContainer/>
                <CartContainer/>
            </div>
        )
    }
}
export default CartPage

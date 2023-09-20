import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    console.log('cartItems: ', cartItems);
    return (
        <h1>Cart</h1>
    )
}

export default Cart
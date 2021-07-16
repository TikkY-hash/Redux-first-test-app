import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import CartItemList from '../cart-item-list/'
import {bookDeleteCart,bookAddToCart,bookDeleteOneCart} from '../../actions/'


const CartList = styled.ul`
    li {
        list-style : none;
        display : flex;
        justify-content : space-between;
        margin-top : 30px;
        border-top: 1px solid grey;
        padding-top : 10px;
        padding-bottom : 10px;
        border-bottom : 1px solid grey;
    }

`

const PricePosition = styled.div`
    text-align : end;

`

const CartItem = ({cartList,bookDeleteCart,bookAddToCart,bookDeleteOneCart,totalPrice}) => {
    return (
        <>
            <h1>Your Order</h1>
            <CartList>
                <li>
                    <span>#</span>
                    <span> Item </span>
                    <span>Count</span>
                    <span>Price</span>
                    <span>Action</span>
                </li>
                {cartList.map((value,index) => {
                    const { id } = value
                    return (
                        <li key = {id}>
                            <CartItemList 
                            {...value} 
                            index = {index}
                            onDeleteOneCart = {() => bookDeleteOneCart(id)}
                            onIncreaseCart = {() => bookAddToCart(id)} 
                            onDeleteAllCart = {() => bookDeleteCart(id)}/>
                        </li>
                    )
                 })}
            </CartList>
            <PricePosition>
                <h4>Your total price ${totalPrice} </h4>
            </PricePosition>
        </>
    )
}

const mapStateToProps = ({cartsState : { cartList,totalPrice }}) => {
    return {
        cartList,
        totalPrice
    }
}

const mapActionToDispatch =  {
    bookDeleteCart,
    bookAddToCart,
    bookDeleteOneCart
}



export default connect(mapStateToProps,mapActionToDispatch)(CartItem)
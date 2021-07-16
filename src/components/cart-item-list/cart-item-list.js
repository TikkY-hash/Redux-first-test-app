import React from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'


const ButtonStyle =  styled(Button)`
    margin-right : 10px;
`

const CartItemList = ({index,item,count,price,onDeleteOneCart,onIncreaseCart,onDeleteAllCart}) => {
    return (
        <>
            <span>{index + 1}</span>
            <span>{item} </span>
            <span>{count}</span>
            <span>${price}</span>
            <span>
                <ButtonStyle outline color="warning" onClick = {onDeleteOneCart}>
                    <i className ="bi bi-dash-circle-fill"></i>
                </ButtonStyle>
                <ButtonStyle outline color="success" onClick = {onIncreaseCart}>
                    <i className ="bi bi-bag-plus-fill"></i>
                </ButtonStyle>
                <ButtonStyle outline color="danger" onClick = {onDeleteAllCart}>
                   <i className ="bi bi-trash"></i>
                </ButtonStyle>
            </span>
        </>
    )
}

export default CartItemList
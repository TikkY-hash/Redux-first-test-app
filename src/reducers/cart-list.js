const deleteCart = (cartList,currentCartOrderId) => {
    return  [
            ...cartList.splice(0,currentCartOrderId),
            ...cartList.splice(currentCartOrderId + 1)
        ]
}

const getNewCart = (currentCartId,cartList,newCart) => {
    if(currentCartId === -1) {
        return [
            ...cartList,
            newCart
        ]
    }

    if(newCart.count === 0) {
        return deleteCart(cartList,currentCartId)
    }

    return [
        ...cartList.splice(0,currentCartId),
        newCart,
        ...cartList.splice(currentCartId + 1)
    ]
}

const createNewCart = (oldCartInformation,currentBookIndormation) => {
    if( !oldCartInformation ) {
        return {
           id : currentBookIndormation.id,
           item : currentBookIndormation.title,
           count : 1,
           price : currentBookIndormation.price
       }
   } 
    return {
        ...oldCartInformation,
        count : oldCartInformation.count + 1,
        price : oldCartInformation.price + currentBookIndormation.price
    }
}

const onDeleteOneCart = (oldCartInformation,currentBookIndormation) => {
    return {
        ...oldCartInformation,
        count : oldCartInformation.count - 1,
        price : oldCartInformation.price - currentBookIndormation.price
    }
}

const cartActions = (bookId,state,actionFunc,quantity) => {
    const {booksState : { bookList }, cartsState : { cartList,total,totalPrice }} = state

    const currentBookIndormation = bookList.find(value => value.id === bookId)

    const currentCartId = cartList.findIndex(value => value.id === bookId)
    const oldCartInformation = cartList[currentCartId]

    const newCart = actionFunc(oldCartInformation,currentBookIndormation);


    return {
        total : total + quantity,
        totalPrice : totalPrice + currentBookIndormation.price * quantity,
        cartList : getNewCart(currentCartId, cartList,newCart)
    }
}


const onUpdateCartsState = (state,action) => {
    if(state === undefined) {
        return {
            cartList : [],
            total : 0,
            totalPrice : 0
        }
    }

    switch (action.type) {
        case 'BOOKS_ADD_TO_CART' :    
            return cartActions(action.payload,state,createNewCart, +1)
        case 'BOOKS_DELETE_CART' :
            const { cartsState : {cartList,total,totalPrice} } = state


            const cartId = action.payload
            const currentCartOrderId = cartList.findIndex(value => value.id === cartId)
            const currentCartIndormation = cartList[currentCartOrderId]

            return {
                total : total - currentCartIndormation.count,
                totalPrice : totalPrice - currentCartIndormation.price,
                cartList : deleteCart(state.cartsState.cartList,currentCartOrderId)
            }
        case 'BOOKS_DELETE_ONE_CART' :
            return cartActions(action.payload,state,onDeleteOneCart,-1)
        default : 
            return state.cartsState
    }
}

export default onUpdateCartsState
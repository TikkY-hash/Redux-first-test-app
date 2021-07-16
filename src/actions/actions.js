 const bookRequest = (payload) => {
    return {
        type : 'FETCH_BOOKS_REQUEST',
        payload
    }
}

 const bookLoad = () => {
    return {
        type : 'FETCH_BOOKS_LOAD'
    }
} 

 const bookFailure = (error) => {
    return {
        type : 'FETCH_BOOKS_FAILURE',
        payload : error
    }
}


export const bookAddToCart = (bookId) => {
    return {
        type : 'BOOKS_ADD_TO_CART',
        payload : bookId
    }
}


export const bookDeleteCart = (cartId) => {
    return {
        type : 'BOOKS_DELETE_CART',
        payload: cartId
    }
}

export const bookDeleteOneCart = (cartId) => {
    return {
        type : 'BOOKS_DELETE_ONE_CART',
        payload: cartId
    }
}

// const bookGetDataOld = (dispatch,bookData) => () => {
//     dispatch(bookLoad())

//     bookData.getBookData()
//     .then(value => dispatch(bookRequest(value)))
//     .catch(err => bookFailure(err))
// }


export const bookGetData = (bookData)  => (dispatch) => {
    dispatch(bookLoad())

    bookData.getBookData()
    .then(value => dispatch(bookRequest(value)))
    .catch(err => bookFailure(err))
}


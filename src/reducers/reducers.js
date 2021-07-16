import onUpdateBooksState from './book-list'
import onUpdateCartsState from './cart-list'

const reducer = (state,action) => {
    return {
        booksState : onUpdateBooksState(state,action),
        cartsState : onUpdateCartsState(state,action)
    }
}

export {
    reducer
}
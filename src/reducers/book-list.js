const onUpdateBooksState = (state,action) => {

    if(state === undefined) {
        return {
            bookList : [],
            loading : true,
            error : null,
        }
    }

    switch (action.type) {
        case "FETCH_BOOKS_LOAD" :
            return {
                loading : true,
                error : null
            }
        case 'FETCH_BOOKS_REQUEST' : 
            return {
                loading : false,
                error : null,
                bookList : action.payload
            }
        case 'FETCH_BOOKS_FAILURE' :
            return {
                loading : false,
                error : action.payload
            }
        default :
           return state.booksState
    }
}

export default onUpdateBooksState
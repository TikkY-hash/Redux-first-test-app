import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import withBookData from '../hoc'
import BookListItem from '../book-list-item'
import { bookGetData,bookAddToCart } from '../../actions/'
import Spinner  from '../spinner'
import compose from '../../utils'
import ErrorIndicator from '../error-incdicator/'
import styled from 'styled-components'

const BookListResetStyle = styled.ul`
    li {
        list-style : none;
        display : flex;
        margin : 50px 10px 50px 10px;
    }
`

const BookListContainer = ({bookList,loading,error,fetchBook,bookAddToCart}) => {

    useEffect(() => {
        fetchBook()
    },[fetchBook])


    if(loading) {
        return <Spinner/>
    }

    if(error) {
        return <ErrorIndicator/>
    }

    return <BookList bookList = {bookList} onSendBookId = {(id) => bookAddToCart(id)}/>
}

const BookList = ({bookList,onSendBookId}) => {
    return (
        <BookListResetStyle>
            {
                bookList.map(value => {
                    const { id } = value
            
                    return (
                        <li key = {id}>
                            <BookListItem {...value} onSendBookId = {() => onSendBookId(id)}/>
                        </li>
                    )
                })
            }
        </BookListResetStyle>
    )
}

const mapStateToProps = ({ booksState : { bookList,loading,error }}) => {
    return {
        bookList,
        loading,
        error
    }
}

const mapActionToDispatch = (dispatch,{ bookData }) => {
    return {
        fetchBook : () => dispatch(bookGetData(bookData)),
        bookAddToCart : (id) => dispatch(bookAddToCart(id))
    }
}


export default 
compose(
    withBookData(),
    connect(mapStateToProps,mapActionToDispatch)
 )( BookListContainer )
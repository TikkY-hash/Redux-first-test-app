import React from 'react'
import { BookConsumer } from '../book-context'

const withBookData = () => (View) => {
    return (props) => {
        return (
            <BookConsumer>
                {
                    (bookData) => <View bookData = {bookData}/>
                }
            </BookConsumer>
        )
    }
} 

export default withBookData
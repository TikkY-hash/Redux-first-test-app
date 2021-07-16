import React from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'


const DescriprionText = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content : space-between;
`


const ImageBooksSize = styled.img`
    width : 100%;
    height : 100%;
    max-width : 150px;
    margin-right : 20px;
`

const BookListItem = ({title,author,price,image,onSendBookId}) => {
    return (
        <>
            <div>
                <ImageBooksSize src={image} alt="list" width = "120" height = "120" />
            </div>
            <DescriprionText>
                <span>{title}</span>
                <span>{author}</span>
                <span>${price}</span>
                <Button color="primary" onClick={onSendBookId}>
                    Add to card
                </Button>
            </DescriprionText>
       </> 
    )
}

export default  BookListItem
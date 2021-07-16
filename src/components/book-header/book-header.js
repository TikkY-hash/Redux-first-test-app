import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const BookHeaderStyle = styled.header`
    display : flex;
    justify-content : space-between;
    align-items : baseline;
    margin-top : 20px;
    border-bottom: 1px solid grey;
    padding-bottom : 1%;
`

const LinkStyle = styled(Link)`
    text-decoration : none;
    color : black;
    :hover {
        color : black;
    }
`

const BookHeader = ({totalPrice,total}) => {
    return (
        <BookHeaderStyle>
            <LinkStyle to = "/">
              <h1>ReStore</h1>
            </LinkStyle>
            <LinkStyle to = "/cart">
                <i className="bi bi-cart">
                    {total} items (${totalPrice})
                </i>
            </LinkStyle>
            
        </BookHeaderStyle>
    )
}


const mapStateToProps = ({cartsState : { total,totalPrice }}) => ({
    total,
    totalPrice
})

export default connect(mapStateToProps)(BookHeader)
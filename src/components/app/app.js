import React from 'react'
import { Route,Switch } from 'react-router'
import { Container } from 'reactstrap'
import { BookPage,CartPage } from '../pages'
import BookHeader from '../book-header'


const App = () => {
    return (
        <Container>
             <BookHeader />
            <Switch>
                <Route path = "/"  component = {BookPage} exact/>
                <Route path = "/cart" component = {CartPage}/>
                <Route render = {() => <h1>Page not found</h1>}/>
            </Switch>
        </Container>
    )
}

export default App
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import { BookProvider } from './components/book-context/'
import {bookDataBase,fakeBookData} from './services/'
import ErrorBoundry from './components/error-boundry';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


const newData = new bookDataBase()
const fakeNewData = new fakeBookData()

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
        <ErrorBoundry>
          <BookProvider value = {fakeNewData}>
            <Router>
                <App/>
            </Router>
          </BookProvider>
        </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


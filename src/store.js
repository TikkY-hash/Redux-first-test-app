import { createStore,applyMiddleware } from 'redux'
import { reducer } from './reducers'
import ThunkMiddleware  from 'redux-thunk'

const stringMiddelware = () => (next) => (action) => {
    if(typeof action === 'string') {
        return next({
            type : 'action'
        })
    }

    return next(action)
}

const logMiddleware = () => (next) => (action) => {
    console.log(action.type)
    return next(action)
}
const store = createStore(reducer,applyMiddleware(ThunkMiddleware,stringMiddelware,logMiddleware))


export default store


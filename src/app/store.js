import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {MovieReducer} from './reducers/MovieReducer'

const rootReducer = combineReducers({
    MovieReducer,
}
)
 const store =   createStore(rootReducer, applyMiddleware(thunk))

export default store
import {combineReducers,createStore} from 'redux'
import * as reducers from './reducers.js'

export const store = createStore(combineReducers({...reducers}))

window.store = store

export const dispatch = store.dispatch.bind(store)

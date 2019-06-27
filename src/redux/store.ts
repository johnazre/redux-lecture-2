import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

let middleware = [logger, thunk]

export default createStore(rootReducer, applyMiddleware(...middleware))

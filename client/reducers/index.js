import dummyReducer from './reducer1'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    dummyData: dummyReducer
})

export default rootReducer
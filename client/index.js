import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'


ReactDOM.render(
    <Provider store={store}>
    <div>Hello World</div>
    </Provider>,
    document.getElementById('app')
)
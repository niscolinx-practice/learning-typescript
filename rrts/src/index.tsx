import React from 'react'
import ReactDom from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDom.render(app, document.querySelector('#root'))
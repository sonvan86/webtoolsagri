import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMidleware from 'redux-saga'
import RootReducer from './reducers'
import RootSaga from './sagas'
import RouterCommon from './components/commons/router'

const sagaMiddleware = createSagaMidleware()
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(RootSaga)

function Application() {
    return (
        <Provider store={store}>
            <RouterCommon />
        </Provider>
    )
}

export default Application

if (document.getElementById('app')) {
    ReactDOM.render(<Application />, document.getElementById('app'))
}

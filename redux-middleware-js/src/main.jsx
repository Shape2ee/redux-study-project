import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './module'
import myLogger from './middlewares/myLogger'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

// const store = createStore(rootReducer, applyMiddleware(myLogger, logger))
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)))
// 여러개 미들웨어를 적용 가능


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

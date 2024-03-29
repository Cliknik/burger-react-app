import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MemoizedApp} from './components/app/app';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from "./services/reducers/index";
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enchancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enchancer)

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <MemoizedApp />
    </Provider>,
    root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

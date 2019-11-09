import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, applyMiddleware  } from 'redux';
import { reducers } from './state/store/PersonStore';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        {' '}
        <App />
    </Provider>
, document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Promise from 'redux-promise';
import rootReducer from './reducers/';
import think from "./middleware/think"
import types from "./actions/types";
import './/assets/css/app.scss';

const store = createStore(rootReducer, {}, applyMiddleware(Promise, think));

if(localStorage.getItem("user")) {
    const userData = JSON.parse(localStorage.getItem('user'));
    store.dispatch({
        type: types.SIGN_IN,
        user: userData
    });
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
    
);

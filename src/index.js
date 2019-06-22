import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import packages for redux store setup and provider wrap. 
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';

// import reducers from where they live see last line of reducers.js
import reducers from './redux/reducers/reducers';

//This is use to set up the redux dev tools. https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//This creates the store for redux see https://react-redux.js.org/introduction/quick-start
const store = createStore(reducers, composeEnhancers())


ReactDOM.render(
    <Provider store={store}>{/* This makes it possible for components to connect to redux */}
        <App />
    </Provider>, 
    document.getElementById('root'));


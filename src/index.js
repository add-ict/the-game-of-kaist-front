import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter as Router} from "react-router-dom";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './modules';
import App from "./App";

//const store = createStore(rootReducer);
const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <React.StrictMode><Provider store={store}><Router>
        <App/>
    </Router></Provider></React.StrictMode>,
    document.getElementById('root')
);
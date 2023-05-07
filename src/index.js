import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Home/App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux'
import reducers from './components/reducers';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={store} >

    
        <BrowserRouter>
            <App />
        </BrowserRouter>

    </Provider>
    
    
);

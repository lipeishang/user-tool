import reducer from './reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import allUsers from './middlewares/FindAllUsers';
import addUsers from './middlewares/AddUsers';
import deleteUser from './middlewares/DeleteUser';
import modifyUser from './middlewares/ModifyUser';
import searchUser from './middlewares/SearchUser';
import {Router, Route,hashHistory} from 'react-router';

const Middleware = applyMiddleware(allUsers,addUsers,deleteUser,modifyUser,searchUser);
let store = createStore(reducer, Middleware);
ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { App, Home, Login, Register } from 'containers';

const rootElement = document.getElementById('root');
ReactDOM.render(
        <BrowserRouter>
                <App>
                    <Route exact path="/" component={Home}/>
                    <Route path="home" component={Home}/>
                    <Route path="login" component={Login}/>
                    <Route path="register" component={Register}/>
                </App>
        </BrowserRouter>, rootElement
);
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Main from './main.jsx';
import ChatIndex from './Chat/chat.index.jsx';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

render(
    (
        <BrowserRouter basename="/reactfront">
            <Main>
                <Route exact path="/" component={ChatIndex} />
            </Main>
        </BrowserRouter>
    ),
    document.getElementById('content')
);

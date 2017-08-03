
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';

import { NotFound } from './pages/NotFound/NotFound';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';

import "./global-css/App.css";

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about/:message?" component={About} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'))

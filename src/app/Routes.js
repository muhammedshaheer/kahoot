import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/page-not-found" component={PageNotFound} />
                <Redirect to="/page-not-found" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
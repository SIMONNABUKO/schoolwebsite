import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import App from './App';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route  path='/contact' component={Contact}/>
            <Route  path='/dashboard' component={Dashboard}/>
        </Switch>
    </BrowserRouter>
);
export default Router;
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Not_Found from './components/Not_found';
import MyListComponent from './components/MyListComponent';


class Router extends Component {

    render() {
        return (
            <BrowserRouter>

                <NavBar />

                <Switch>
                    <Route exact path='/' component={Home} ></Route>
                    <Route exact path='/home' component={Home} ></Route>
                    <Route exact path='/mylist' component={MyListComponent} ></Route>

                    <Route component={Not_Found} ></Route>
                </Switch>

            </BrowserRouter>
        );
    }

}

export default Router;
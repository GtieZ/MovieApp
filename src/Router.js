import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies';
import Not_Found from './components/Not_found';
import MyListComponent from './components/MyListComponent';


class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} ></Route>
                    <Route exact path='/movie/:query' component={Movies} ></Route>

                    <Route exact path='/myList' component={MyListComponent} ></Route>


                    <Route component={Not_Found} ></Route>
                </Switch>
            </BrowserRouter>
        );
    }

}

export default Router;
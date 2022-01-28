import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies';
import Not_Found from './components/Not_found';


class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} ></Route>
                    <Route path='/movie' element={<Movies />} ></Route>

                    <Route path='*' element={<Not_Found />} ></Route>
                </Routes>
            </BrowserRouter>
        );
    }

}

export default Router;
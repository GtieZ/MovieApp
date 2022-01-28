import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Movies from './components/Movies';
import Not_Found from './components/Not_found';


class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Movies />} ></Route>

                    <Route path='/error' element={<Not_Found />} ></Route>





                </Routes>
            </BrowserRouter>
        );
    }

}

export default Router;
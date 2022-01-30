import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand ms-5"><strong>MovieWeb</strong></span>

                    <button className="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ms-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link text-center">Home</NavLink>
                            </li>
                            <li className="nav-item ms-3">
                                <NavLink to="/mylist" className="nav-link text-center">My List</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>


        );
    }
}

export default NavBar;
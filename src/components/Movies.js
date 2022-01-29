import React, { Component } from 'react';
import axios from 'axios';
import general from '../general/general';

import MovieComponent from './MovieComponent';


class Movies extends Component {
    apiKey = general.api_key;
    queryUrl = general.search_url;
    
    state = {
        movies: [],
        searched: false
    };

    getMovies = () => {
        let searchString = this.props.match.params.query;
        let endpoint = this.queryUrl + this.apiKey + '&query=' + searchString;
        axios.get(endpoint).then(response => {
            this.setState({
                movies: response.data.results,
                searched: true
            });
        });
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        if (this.state.movies.length > 0) {
            let listMovie = this.state.movies.map((movie, index) => {
                return (
                    <div key={index} className="MovieList container">
                        <MovieComponent movie={movie} />
                    </div>
                )
            });
            return (
                <div>
                    {listMovie}
                </div>
            )
        } else if(!this.state.searched){

            return <div>cargando...</div>
        }

        return <div>No se encontraron peliculas para esta búsqueda</div>
        
    }



}


export default Movies;
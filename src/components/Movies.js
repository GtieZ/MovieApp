import React, { Component } from 'react';
import axios from 'axios';

import MovieComponent from './MovieComponent';
import general from '../general/general';


class Movies extends Component {
    apiKey = general.api_key;
    queryUrl = general.search_url;

    state = {
        movies: [],
        query: this.props.query,
        searched: false,
        firstQuery: true,
        onChange: false
    };

    getMovies = (searchString) => {
        let endpoint = this.queryUrl + this.apiKey + '&query=' + searchString;
        axios.get(endpoint).then(response => {
            this.setState({
                movies: response.data.results,
                searched: true,
                firstQuery: false,
                onChange: false
            });
        });
    };


    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.setState({ onChange: true })

            if (this.props.query !== '') {
                this.getMovies(this.props.query);
            }


        }
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
                <div className="mt-4 queryResult">
                    {listMovie}
                </div>
            )
        } else if (!this.state.searched) {
            return <div className="text-light mt-3">
                {this.state.firstQuery ? '' : 'cargando...'}
            </div>
        }
        return <h3 className="text-light mt-5">
            No se encontraron peliculas para esta búsqueda
        </h3>

    }

}


export default Movies;
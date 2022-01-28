import React, { Component } from 'react';
import axios from 'axios';
import general from '../general/general';

class Movies extends Component {
    apiKey = general.api_key;
    queryUrl = general.search_url;
    imageUrl = general.image_url;

    state = {
        movies: [],
        searchString: 'Shrek',
    };

    getMovies = () => {
        let endpoint = this.queryUrl + this.apiKey + '&query=' + this.state.searchString
        axios.get(endpoint).then(response => {
            this.setState({
                movies: response.data.results
            });
        });
    };

    componentDidMount() {

        this.setState({ searchString: 'Titanic' })

        this.getMovies();
    }

    render() {
        if (this.state.movies.length > 0) {
            let listMovie = this.state.movies.map((movie, index) => {
                return (
                    <div key={index}>
                        <p>id: {movie.id}</p>
                        <p>title: {movie.title}</p>
                        <img src={this.imageUrl + movie.poster_path} alt={movie.title}></img>
                        <p>poster_path: {movie.poster_path}</p>

                        <p>original_title: {movie.original_title}</p>
                        <p>release_date: {movie.release_date}</p>
                        <p>overview: {movie.overview}</p>

                        <p>genre_ids: {movie.genre_ids}</p>
                        <p>original_language: {movie.original_language}</p>

                        <p>adult: {movie.adult}</p>
                        <p>backdrop_path: {movie.backdrop_path}</p>
                        
                        <p>popularity: {movie.popularity}</p>
                        <p>video: {movie.video}</p>
                        <p>vote_average: {movie.vote_average}</p>
                        <p>vote_count {movie.vote_count}</p>

                        

                        <hr></hr>

                    </div>
                );

            });
            return (
                <div>
                    {listMovie}
                </div>
            );
        }

        return (
            <div>No se encontraron peliculas para esta búsqueda</div>
        );
    }



}


export default Movies;
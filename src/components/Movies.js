import { Component, React } from 'react';
import axios from 'axios';
import general from '../general/general';

class Movies extends Component {
    apiKey = general.api_key;
    queryUrl = general.search_url;
    imageUrl = general.image_url;
    
    state = {
        movies: [],
        searchString: 'Titanic',   
    };

    getMovies = () => {
        let endpoint = this.queryUrl+this.apiKey+'&query='+this.state.searchString
        axios.get(endpoint).then(response => {
            this.setState({
                movies: response.data.results
            });
        });
    };

    componentDidMount() {

        this.setState({searchString: 'Titanic'})

        this.getMovies();
    }

    render() {
        if (this.state.movies.length > 0) {
            let listMovie = this.state.movies.map((movie, index) => {
                return (
                    <div key={index}>
                        <p>adult: {movie.adult}</p>
                        <p>backdrop_path: {movie.backdrop_path}</p>
                        <p>genre_ids: {movie.genre_ids}</p>
                        <p>id: {movie.id}</p>
                        <p>original_language: {movie.original_language}</p>
                        <p>original_title: {movie.original_title}</p>
                        <p>overview: {movie.overview}</p>
                        <p>popularity: {movie.popularity}</p>
                        <p>poster_path: {movie.poster_path}</p>

                        <img src={this.imageUrl+movie.poster_path}></img>

                        <p>release_date: {movie.release_date}</p>
                        <p>title: {movie.title}</p>
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
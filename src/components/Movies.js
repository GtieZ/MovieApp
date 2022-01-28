import { Component, React } from 'react';
import axios from 'axios';
import general from '../general/general';

class Movies extends Component {

    endpoint = "https://api.themoviedb.org/3/search/movie?api_key=84ee704467841409c9c9b05e0645bfbd&query=Titanic"


    state = {
        movies: [],
    };


    getMovie = () => {
        axios.get(this.endpoint).then(response => {

            this.setState({
                movies: response.data.results
            });
        });
    };




    componentDidMount() {
        this.getMovie();
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
            <div>Hello World!</div>
        );
    }



}


export default Movies;
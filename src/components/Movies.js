import React, { Component } from 'react';
import axios from 'axios';
import general from '../general/general';

class Movies extends Component {
    apiKey = general.api_key;
    queryUrl = general.search_url;
    imageUrl = general.image_url;

    state = {
        movies: [],
    };

    getMovies = () => {
        let searchString = this.props.match.params.query;
        let endpoint = this.queryUrl + this.apiKey + '&query=' + searchString;
        axios.get(endpoint).then(response => {
            this.setState({
                movies: response.data.results
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
                    <div key={index} className="container">

                        <div className="card posterCard my-3 me-3" >
                            <img src={this.imageUrl + movie.poster_path}
                                className="card-img-top" alt={movie.title}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    {movie.title}
                                </p>

                                <p>release_date: {movie.release_date}</p>

                            </div>

                            {/* Button trigger modal */}
                            <button type="button" className="btn btn-primary"
                                data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + movie.id}
                            >
                                Launch static backdrop modal
                            </button>
                        </div>



                        {/* Modal */}
                        <div className="modal fade" id={"staticBackdrop" + movie.id} data-bs-backdrop="static">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">

                                        </button>
                                    </div>
                                    <div className="modal-body">
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
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Understood</button>
                                    </div>
                                </div>
                            </div>
                        </div>


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
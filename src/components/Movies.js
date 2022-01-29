import React, { Component } from 'react';
import axios from 'axios';
import general from '../general/general';

import noDisponiblePic from '../assets/images/no_disponible.jpg';

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

                        <div className="card my-3 me-3 posterCard" >
                            <input type="image"
                                src={movie.poster_path ? this.imageUrl + movie.poster_path : noDisponiblePic}
                                className="card-img-top" alt={movie.title}
                                data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + movie.id}
                            />

                            <div className="card-body">
                                <p className="card-text">
                                    <strong>{movie.title}</strong>
                                </p>
                            </div>

                            <div className="card-footer">
                                ({movie.release_date ? movie.release_date.substring(0, 4) : 'sin fecha'})
                            </div>
                        </div>

                        {/* Modal */}
                        <div className="modal fade" id={"staticBackdrop" + movie.id} data-bs-backdrop="static">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">{movie.title}</h5>
                                        <button type="button" className="btn-close" 
                                            data-bs-dismiss="modal" aria-label="Close"
                                        />
                                        
                                    </div>
                                    <div className="modal-body">
                                        <img src={movie.poster_path ? this.imageUrl + movie.poster_path : noDisponiblePic}/>
                                        <p>id: {movie.id}</p>

                                        <p>original_title: {movie.original_title}</p>
                                        <p>overview: {movie.overview}</p>
                                        <p>release_date: {movie.release_date}</p>

                                        <p>genre_ids: {movie.genre_ids}</p>
                                        <p>original_language: {movie.original_language}</p>

                                        <p>adult: {movie.adult}</p>

                                        <p>popularity: {movie.popularity}</p>
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
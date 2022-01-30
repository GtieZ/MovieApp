import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addToList } from '../data/myListSlice';
import general from '../general/general';
import noDisponiblePic from '../assets/images/no_disponible.jpg';



const MovieComponent = ({ movie }) => {

    const imageUrl = general.image_url;
    const [rankValue, setRankValue] = useState(1);
    const dispatch = useDispatch();
    
    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(addToList({
            id: movie.id,
            filmTitle: movie.title,
            reviewValue: rankValue,
            posterPath: movie.poster_path
        }));
    };


    return (
        <React.Fragment>
            <div className="card my-3 me-3 posterCard" >
                <input type="image"
                    src={movie.poster_path ? imageUrl + movie.poster_path : noDisponiblePic}
                    className="card-img-top image-card" alt={movie.title}
                    data-bs-toggle="modal" data-bs-target={"#staticBackdrop" + movie.id}
                />

                <div className="card-body ">
                    <p className="overflow-on">
                        <strong>
                            {movie.title.length<30 ? movie.title : movie.title.substring(0,30) + '...'}
                        
                        </strong>
                    </p>
                </div>

                <div className="card-footer bg-dark text-light">
                    ({movie.release_date ? movie.release_date.substring(0, 4) : 'sin fecha'})
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id={"staticBackdrop" + movie.id} 
                data-bs-backdrop="static"
            > <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title">{movie.title}</h5>
                            <button type="button" className="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"
                            />
                        </div>
                        
                        <div className="modal-body">
                            <img className="modal-pic me-3"
                                src={movie.poster_path ? imageUrl + movie.poster_path : noDisponiblePic} 
                            />
                            <p className="overview text-primary">
                                <strong>Sinopsis:</strong>
                            </p>

                            <p className="overview">{movie.overview}</p>

                            <p className="overview ">
                                <strong className="text-primary">Fecha:</strong>
                                <em> {movie.release_date}</em> 
                            </p>

                            <p className="overview">
                                <strong className="text-primary">Idioma original:</strong>
                                <em> {movie.original_language}</em>  
                            </p>
                        </div>

                        <div className="modal-footer">
                            <form onSubmit={onSubmit}>
                                <div className="form-floating ranking-selector">
                                    <select className="form-select" 
                                        onChange={event => setRankValue(event.target.value)}
                                    ><option value="1">
                                            &#9733; &#9734; &#9734; &#9734; &#9734; 
                                            &nbsp; (1) 
                                        </option>
                                        <option value="2">
                                            &#9733; &#9733; &#9734; &#9734; &#9734; 
                                            &nbsp; (2)
                                        </option>
                                        <option value="3">
                                            &#9733; &#9733; &#9733; &#9734; &#9734; 
                                            &nbsp; (3)
                                        </option>
                                        <option value="4">
                                            &#9733; &#9733; &#9733; &#9733; &#9734; 
                                            &nbsp; (4)
                                        </option>
                                        <option value="5">
                                            &#9733; &#9733; &#9733; &#9733; &#9733; 
                                            &nbsp; (5)
                                        </option>
                                    </select>
                                    <label htmlFor="floatingSelect">
                                        Valora esta película
                                    </label>
                                </div>

                                <button type="submit" 
                                    className="btn btn-primary ms-2 ranking-button" 
                                    data-bs-dismiss="modal"
                                >Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};


export default MovieComponent;
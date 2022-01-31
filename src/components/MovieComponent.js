import React from 'react';

import Modal from './Modal';
import general from '../general/general';
import noDisponiblePic from '../assets/images/no_disponible.jpg';


const MovieComponent = ({ movie }) => {
    const imageUrl = general.image_url;

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
                            {movie.title.length < 30 ? movie.title : movie.title.substring(0, 30) + '...'}

                        </strong>
                    </p>
                </div>

                <div className="card-footer bg-dark text-light">
                    ({movie.release_date ? movie.release_date.substring(0, 4) : 'sin fecha'})
                </div>
            </div>

            <Modal movie={movie} />
        </React.Fragment>
    );
};


export default MovieComponent;
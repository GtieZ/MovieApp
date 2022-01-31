import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';

import general from '../general/general';
import noDisponiblePic from '../assets/images/no_disponible.jpg';


const MyListComponent = () => {
    const imageUrl = general.image_url;

    const reviewList = useSelector(state => state.myList);

    useEffect(() => {
        if (reviewList.length > 0) {
            gsap.from('.list-item', {
                x: -20,
                delay: 0,
                rotation: "+=360",
                scale: 0.1
            });
        }
    });


    if (reviewList.length === 0) {
        return <h4 className="text-light mt-5">Todavía no has valorado ninguna película</h4>
    }
    return (
        <div className="text-light align-items-center mt-5 container list-container">
            {
                reviewList.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="alert alert-dark mb-5 list-item">
                                <img className="list-pic mx-3" alt={item.title}
                                    src={item.posterPath ? imageUrl + item.posterPath : noDisponiblePic}
                                />
                                <h4 className="text-dark mt-3">{item.filmTitle}</h4>

                                <p className="list-review">
                                    Valoración: <strong>{item.reviewValue} &#9734;</strong>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default MyListComponent;
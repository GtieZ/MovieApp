import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import { addList } from '../data/myListSlice';



const MyListComponent = () => {

 


    const reviewList = useSelector(state => state.myList);
    console.log(reviewList);


    return (
        <div>

            <h2>este es myList Component</h2>
            <hr/>

            {
                reviewList.map((item, index) => {
                    return (
                        <div key={index}>

                            <p>id: {item.id}</p>
                            <p>filmTitle: {item.filmTitle}</p>
                            <p>reviewValue: {item.reviewValue}</p>
                            <hr/>

                        </div>
                    )
                })
            }

        </div>
    );
};


export default MyListComponent;
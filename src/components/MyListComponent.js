import React from 'react';
import { useSelector } from 'react-redux';


const MyListComponent = () => {
    
    const reviewList = useSelector(state => state.myList);
    
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
                            <p>posterPath: {item.posterPath}</p>

                            <hr/>

                        </div>
                    )
                })
            }

        </div>
    );
};


export default MyListComponent;
import { createSlice } from '@reduxjs/toolkit';

const myListSlice = createSlice({
    name: 'myList',
    initialState: [
        {id: 1, filmTitle: "Pelicula1", reviewValue: 1},
        {id: 2, filmTitle: "Pelicula2", reviewValue: 5},
        {id: 3, filmTitle: "Pelicula3", reviewValue: 3},
        {id: 4, filmTitle: "Pelicula4", reviewValue: 5},
    ],
    reducers: {
        addList: (state, action) => {
            const newList = {
                id: Date.now(),
                filmTitle: action.payload.filmTitle,
                reviewValue: action.payload.reviewValue
            };

            state.push(newList);
        },
    }
});

export const { addList } = myListSlice.actions;
export default myListSlice.reducer;
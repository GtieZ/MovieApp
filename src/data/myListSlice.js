import { createSlice } from '@reduxjs/toolkit';

const myListSlice = createSlice({
    name: 'myList',
    initialState: [],
    reducers: {
        addToList: (state, action) => {
            const newList = {
                id: action.payload.id,
                filmTitle: action.payload.filmTitle,
                reviewValue: action.payload.reviewValue,
                posterPath: action.payload.posterPath
            };

            state.push(newList);
        },
    }
});

export const { addToList } = myListSlice.actions;
export default myListSlice.reducer;
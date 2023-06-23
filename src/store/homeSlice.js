import { createSlice } from "@reduxjs/toolkit";
const homeSlice = createSlice({
    name:"home",
    initialState:{
        url:{},
        genres:{},
    },   
    reducers:{
        getApiConfiguration:(action, payload)=>{
            state.url = action.payload
        },

        getGenres:(action, payload)=>{
            state.genres = action.payload
        }
    }
})
export const {getApiConfiguration, getGenres} = homeSlice.actions;
export default homeSlice.reducer;
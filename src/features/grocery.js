import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value: []
}

const grocerySlice = createSlice({
    name: "grocery",
    initialState: initialState,
    reducers:{
        addNote:(state, action)=>{
            state.value.push(action.payload);

        },

        removeNote:(state, action)=>{

            state.value = state.value.filter((note)=>{
                console.log(note.id);
                return note.id !== action.payload;
            });

            

           

            console.log(state);

        }


    }
});

export const {addNote, removeNote} = grocerySlice.actions;
export default grocerySlice.reducer;
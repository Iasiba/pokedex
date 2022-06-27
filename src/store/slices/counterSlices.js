import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: 'counter',
    initialState: 5,
    reducers: {
        increment: state => {
            return state + 1;
        },
        decrement: state => {
            return state - 1;
        },
        setEspecificValue: (state, action) => { // Recibimos la accion por parámetros
            return action.payload // Colocamos la propiedad payload
            //return 0 asigna  0 como valor
    }
    }
})
export const {increment, decrement, setEspecificValue}=counterSlice.actions
export default counterSlice.reducer
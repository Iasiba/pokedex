import { createSlice } from "@reduxjs/toolkit";
export const typesSlice = createSlice({
    name: 'types',
    initialState: '',
    reducers: {
        setEspecificValue: (state, action) => { // Recibimos la accion por parámetros
            return action.payload // Colocamos la propiedad payload
            //return 0 asigna  0 como valor
        }
    }
})
export const {setEspecificValue}=typesSlice.actions
export default typesSlice.reducer
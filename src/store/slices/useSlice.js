import { createSlice } from "@reduxjs/toolkit";
export const useSlice = createSlice({
    name: 'nombre',
    initialState: "",
    reducers: {
        setName: (state, action) => { // Recibimos la accion por parámetros
            return action.payload // Colocamos la propiedad payload
            //return 0 asigna  0 como valor
        }
    }
})
export const { setName } = useSlice.actions
export default useSlice.reducer
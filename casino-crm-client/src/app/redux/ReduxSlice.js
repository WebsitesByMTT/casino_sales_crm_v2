import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'globlestate',
    initialState: {
        name:"Kajal"
    },
    reducers: {
        UpdateName: (state, action) => {
            state.name = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { UpdateName } = reduxSlice.reducer
export default reduxSlice.reducer
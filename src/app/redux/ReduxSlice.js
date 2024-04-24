import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: 'globlestate',
    initialState: {
        TableState:false
    },
    reducers: {
        UpdateTable: (state, action) => {
            state.TableState = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {UpdateTable} = reduxSlice.actions
export default reduxSlice.reducer
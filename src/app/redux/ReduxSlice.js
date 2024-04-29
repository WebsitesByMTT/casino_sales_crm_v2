import { createSlice } from '@reduxjs/toolkit'
export const reduxSlice = createSlice({
    name: 'globlestate',
    initialState:{
        TableState:false,
        ModalType:"",
        EditData:{}
    },
    reducers: {
        UpdateTable: (state, action) => {
            state.TableState = action.payload
        },

        ModalType:(state,action)=>{
            state.ModalType=action.payload
        },
        EditData:(state,action)=>{
            state.EditData=action.payload
        }   
    },
})
// Action creators are generated for each case reducer function
export const {UpdateTable,ModalType,EditData} = reduxSlice.actions
export default reduxSlice.reducer
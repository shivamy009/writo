import {createSlice} from '@reduxjs/toolkit'
// import axios from "axios";

const initialState={
     currentUser:null,
    //  cart:[]

}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInsuccess:(state,action)=>{
         state.currentUser=action.payload

        },
    }
},[])
// axios.defaults.headers.common['Authorization']=initialState.currentUser?.token
export const {signInsuccess}=userSlice.actions;

export default userSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
const initialAuth={
    isAuth:false,
    mynumbers:[],
}
export const AuthSlice=createSlice({
    name:'authentication',
    initialState:initialAuth,
    reducers:{
        doAuth:(state,action)=>{
            console.log("aaya")
          state.isAuth=true
        },
        addNumber:(state,action)=>{
             state.mynumbers.push(action.payload)
        }
    }
})
export const{doAuth,addNumber}=AuthSlice.actions;
export default AuthSlice.reducer

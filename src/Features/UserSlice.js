import {createSlice} from '@reduxjs/toolkit'
const UserData={
    UserDetails:[],
    Resumes:[]
}
export const UserSlice=createSlice({
    name:'UserData',
    initialState:UserData,
    reducers:{
        addData:(state,action)=>{
            console.log(action);
            state.UserDetails.push({
                id:action.payload.id,
                phoneNumber:action.payload.cvData.phone
            })
            state.Resumes.push({
                CV:action.payload.cvData
            })
        console.log(state.UserDetails);
        console.log(state.Resumes)
        }
    }
})
export const{addData}=UserSlice.actions;
export default UserSlice.reducer;
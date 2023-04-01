import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
userName:'',
password:'',
loading:null,
error:{
  status:false,
  message:''
}
}

export const loginUser=createAsyncThunk('user/login',(async(user)=>{
     try {
      const res=await axios.post('http://localhost:5000/login',user)
      return res.data
     } catch (error) {
      throw new Error(error.response.data)
     }
}))

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers:(builder)=>{
    builder.addCase(loginUser.pending,(state)=>{
      state.loading=true
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
      state.loading=false
      state.error.status=false
      state.userName=action.payload.user.userName
      state.password=action.payload.user.password
  })
  .addCase(loginUser.rejected,(state,action)=>{
    state.loading=false
    state.error.status=true;
    state.error.message=action.error.message
  })
  }
});

export default userSlice.reducer;

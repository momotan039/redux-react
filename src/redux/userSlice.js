import { createSlice } from "@reduxjs/toolkit";

const initialState={
userName:'',
password:'',
loading:null,
error:{
  status:false,
  message:''
}
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser:(state,action)=>{
      debugger
        state.error.status=false
        state.userName=action.payload.userName
        state.password=action.payload.password
    },
    setLoading:(state,action)=>{
      state.loading=action.payload
    },
    setErorr:(state,action)=>{
      debugger
      state.error.status=true,
      state.error.message=action.payload
    }
  },
});

export const { loginUser,setLoading,setErorr } = userSlice.actions;

export default userSlice.reducer;

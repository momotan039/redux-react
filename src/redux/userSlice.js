import { createSlice } from "@reduxjs/toolkit";

const initialState={
userName:'',
password:''
}
export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser:(state,action)=>{
        state.userName=action.payload.userName
        state.password=action.payload.password
    }
  },
});

export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;

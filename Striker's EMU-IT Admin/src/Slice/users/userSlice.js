import axios from 'axios';
import constants from '../../constant'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = constants.API_URL;

const initialState = {
  users: [],
  isSuccess: false,
  isLoading: false,
  isError:false,
  message: "",
};

//Add Comments
async function getUsers() {
    const response = await axios.get(
      `${API_URL}/user/getAll/0/100`);
  
    return response.data;
  }
  
  export const getAllUsers = createAsyncThunk(
    "post/getAllUsers",
    async (_, thunkAPI) => {
      try {
        return await getUsers();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  async function del(id) {
    const response = await axios.delete(
      `${API_URL}/user/deleteUser/${id}`);
  
    return response.data;
  }
  
  export const deleteUser = createAsyncThunk(
    "del/deleteUser",
    async (id, thunkAPI) => {
      try {
        return await del(id);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        reset:(state) => {
            state.users=null;
            state.isLoading = false;
            state.isError = false;
            state.message = '';
            state.isSuccess = false;
        }
    },
    extraReducers:(builder) => {
        builder 
        .addCase(getAllUsers.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getAllUsers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess =true
            state.users = action.payload.message.data
        })
        .addCase(getAllUsers.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message =action.payload;
            state.users = null;
        })
    

        .addCase(deleteUser.pending, (state)=>{
          state.isLoading = true
      })
      .addCase(deleteUser.fulfilled,(state,action)=>{
          state.isLoading = false
          state.isSuccess =true
          //state.del = action.payload.message.data
      })
      .addCase(deleteUser.rejected,(state,action)=>{
          state.isLoading = false;
          state.isError = true;
          state.message =action.payload;
          //state.del = null;
      })
    }
})

export const {reset} = userSlice.actions
export default userSlice.reducer;
import axios from 'axios';
import constants from '../../constant'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = constants.API_URL;

const initialState = {
  posts: [],
  isSuccess: false,
  isLoading: false,
  isError:false,
  message: "",
};

//Add Comments
async function getPosts() {
    const response = await axios.get(
      ``);
  
    return response.data;
  }
  
  export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async (_, thunkAPI) => {
      try {
        return await getPosts();
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

  export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        reset:(state) => {
            state.posts=null;
            state.isLoading = false;
            state.isError = false;
            state.message = '';
            state.isSuccess = false;
        }
    },
    extraReducers:(builder) => {
        builder 
        .addCase(getAllPosts.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getAllPosts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess =true
            state.users = action.payload.message.data
        })
        .addCase(getAllPosts.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message =action.payload;
            state.posts = null;
        })
    

    }
})

export const {reset} = postSlice.actions
export default postSlice.reducer;
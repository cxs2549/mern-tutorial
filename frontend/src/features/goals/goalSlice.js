import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    goals: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ''
}


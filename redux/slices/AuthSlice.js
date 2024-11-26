import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../src/services/AuthServices";

export const loginAuthThunk = createAsyncThunk('auth/login', async ({email,password},{ rejectWithValue }) => {
    try {
        const response = await AuthService.login(email, password);
        return response;
      } catch (error) {
        return rejectWithValue(error.message || 'An unexpected error occurred');
      }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        items: [],
        loading : false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(loginAuthThunk.pending,(state) => {
                state.loading = true
            })
            .addCase(loginAuthThunk.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(loginAuthThunk.rejected, (state, action) => {
                state.loading = false
                state.error = "Failed to fetch login"
            })
    }
})

export default authSlice.reducer
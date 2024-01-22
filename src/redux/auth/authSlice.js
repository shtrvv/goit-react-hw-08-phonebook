import { createSlice } from "@reduxjs/toolkit"
import { logInThunk, logOutThunk, refreshThunk, signUpThunk } from "./authOperations"

const initialState = {
    token: '',
    user: null,
}

const handleSignUp = (state, { payload }) => {
    state.token = payload.token
    state.user = payload.user
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUpThunk.fulfilled, handleSignUp)
            .addCase(logInThunk.fulfilled, handleSignUp)
            .addCase(logOutThunk.fulfilled, (state) => {
                state.token = ''
                state.user = null
            })
            .addCase(refreshThunk.fulfilled, (state, { payload }) => {
                state.user = payload
            })
            .addCase(refreshThunk.rejected, (state) => {
                state.token = ''
                state.user = null
            })
    }
})

export const authReducer = authSlice.reducer;
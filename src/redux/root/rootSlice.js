import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: '',
}

const handlePending = (state) => {
    state.isLoading = true
    state.error = ''
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false
    state.error = payload
}

const handleFulflled = (state) => {
    state.isLoading = false
    state.error = ''
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    extraReducers: (builder) => {
        builder
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulflled)
    }
})

export const rootReducer = rootSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from "./contactsThunks";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
                state.items = payload
            })
            .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.items.push(payload)
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.items = state.items.filter(contact => contact.id !== payload.id)
            })
    }
})

export const contactsReducer = contactsSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContactApi, deleteContactApi, getContactsApi } from "../../services/contacts";

export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            return await getContactsApi()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (body, { rejectWithValue }) => {
        try {
            return await createContactApi(body)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    } 
)

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            return await deleteContactApi(id)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
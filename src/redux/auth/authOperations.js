import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const signUpThunk = createAsyncThunk(
    'auth/signup',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.post('/users/signup', body);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            Notiflix.Notify.failure(`Sorry, this account already exists`);
            return rejectWithValue(error.message)
        }
    }
)

export const logInThunk = createAsyncThunk(
    'auth/login',
    async (body, { rejectWithValue }) => {
        try {
            const response = await axios.post('/users/login', body);
            setToken(response.data.token);
            return response.data;
        } catch (error) {
            Notiflix.Notify.failure(`Sorry, no such account exists`);
            return rejectWithValue(error.message)
        }
    }
)

export const logOutThunk = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post('/users/logout');
            unsetToken();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const refreshThunk = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue, getState }) => {
        const token = getState().auth.token;

        if (token === null) {
            return rejectWithValue('Unable to fetch user');
        }

        try {
            setToken(token);
            const response = await axios.get('/users/current');
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
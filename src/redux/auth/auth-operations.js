import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return await data;
  } catch (err) {
    console.log(err.message);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return await data;
  } catch (err) {
    console.log(err.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
    token.unset();
  } catch (err) {
    console.log(err.message);
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const savedToken = state.auth.token;
  if (!savedToken) {
    return Promise.reject();
  }
  token.set(savedToken);

  try {
    const data = await axios.get('/users/current');
    return data.data;
  } catch (err) {
    console.log(err.message);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
};

export default authOperations;

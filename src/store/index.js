import redux from 'redux'
import { createStore } from 'redux'
import { createSlice,configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
    reducer:{counter:counterReducer,authentication:authReducer}

})

export default store;
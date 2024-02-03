import { configureStore } from "@reduxjs/toolkit";

// createStore, applyMiddleware, combinedReducer, thunk


import counterReducer from "../features/counter/counterSlice.js"

const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})

export default store
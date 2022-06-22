import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./Components/util/stateSlice"

const store = configureStore({
    reducer: {
        state: stateReducer
    }
})

export default store
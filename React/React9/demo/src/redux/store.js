import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../redux/Counterslice";
import ToDoSlice from "../redux/TodoSlice"


// this is the centerlized store which stores all reducers/ slices. states
const store = configureStore({
    reducer: {
        counter: CounterSlice,
        toDo: ToDoSlice,
    }
})

export default store;
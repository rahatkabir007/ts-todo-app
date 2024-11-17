import { configureStore } from "@reduxjs/toolkit";
import { taskStateSlice } from "./features/task/taskStateSlice";

const store = configureStore({
    reducer: {
        taskStateSlice: taskStateSlice.reducer,

    },
});


export default store
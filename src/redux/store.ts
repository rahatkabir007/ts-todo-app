import { configureStore } from "@reduxjs/toolkit";
import { taskStateSlice } from "./features/task/taskStateSlice";
import { otherStateSlice } from "./features/other/otherStateSlice";

const store = configureStore({
    reducer: {
        taskStateSlice: taskStateSlice.reducer,
        otherStateSlice: otherStateSlice.reducer,
    },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
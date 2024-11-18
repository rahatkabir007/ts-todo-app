// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { taskStateSlice } from "./features/task/taskStateSlice";
// import { otherStateSlice } from "./features/other/otherStateSlice";

// // Persist configuration
// const persistConfig = {
//     key: "taskStateSlice",
//     storage,
// };

// // Create the persisted reducer
// const persistedReducer = persistReducer(persistConfig, taskStateSlice.reducer);

// // Configure the store
// export const store = configureStore({
//     reducer: {
//         taskStateSlice: persistedReducer,
//         otherStateSlice: otherStateSlice.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: ["persist/PERSIST", "persist/REGISTER"],
//             },
//         }),
// });

// // Define RootState type
// export type RootState = ReturnType<typeof store.getState>;

// // Define AppDispatch type
// export type AppDispatch = typeof store.dispatch;

// // Create the persistor
// export const persistor = persistStore(store);

// export default store;



import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from "./features/task/taskSlice";
import { otherStateSlice } from "./features/other/otherStateSlice";
import { taskStateSlice } from "./features/task/taskStateSlice";

const persistConfig = {
    key: "tasks",
    storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

export const store = configureStore({
    reducer: {
        tasks: persistedReducer,
        taskStateSlice: taskStateSlice.reducer,
        otherStateSlice: otherStateSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REGISTER"],
            },
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from "./features/task/taskSlice";
import { otherStateSlice } from "./features/other/otherStateSlice";

const persistConfig = {
    key: "tasks",
    storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

export const store = configureStore({
    reducer: {
        tasks: persistedReducer,
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

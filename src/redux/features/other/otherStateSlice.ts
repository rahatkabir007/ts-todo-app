import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: true,
    responsiveOpen: false,
};

export const otherStateSlice = createSlice({
    name: "otherStateSlice",
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setResponsiveOpen: (state, action) => {
            state.responsiveOpen = action.payload;
        },
    },
});

export const {
    setOpen,
    setResponsiveOpen,
} = otherStateSlice.actions;

export default otherStateSlice.reducer;

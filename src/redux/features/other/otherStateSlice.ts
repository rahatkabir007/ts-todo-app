import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: true,
    responsiveOpen: false,
    isModalOpen: false,
    isModalVisible: false,
    modalType: "", // This will hold the type of modal content to display
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
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
        setModalType: (state, action) => {
            state.modalType = action.payload; // Store modal type instead of content
        },
        setModalVisible: (state, action) => {
            state.isModalVisible = action.payload;
        },
    },
});

export const {
    setOpen,
    setResponsiveOpen,
    setIsModalOpen,
    setModalType,
    setModalVisible,
} = otherStateSlice.actions;

export default otherStateSlice.reducer;

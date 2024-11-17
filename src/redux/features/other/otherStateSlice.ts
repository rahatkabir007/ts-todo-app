import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: true,
    responsiveOpen: false,
    isModalOpen: false,
    modalContent: "",
    isModalVisible: false,

};

export const otherStateSlice = createSlice({
    name: 'otherStateSlice',
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload
        },
        setResponsiveOpen: (state, action) => {
            state.responsiveOpen = action.payload
        },
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload
        },
        setModalContent: (state, action) => {
            state.modalContent = action.payload
        },
        setModalVisible: (state, action) => {
            state.isModalVisible = action.payload
        }
    }
});

export const { setOpen, setResponsiveOpen, setIsModalOpen, setModalContent, setModalVisible } = otherStateSlice.actions;

export default otherStateSlice.reducer;
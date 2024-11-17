// import { setIsModalOpen, setModalContent } from '@/redux/features/other/otherStateSlice';
import React from 'react';
// import { useDispatch } from 'react-redux';



const AddTaskButton = () => {
    // const dispatch = useDispatch();

    // const handleModalOpen = (content: string) => {
    //     dispatch(setIsModalOpen(true));
    //     dispatch(setModalContent(content));
    // };

    // const handleModalClose = () => {
    //     dispatch(setIsModalOpen(false));
    //     dispatch(setModalContent(""));
    // };

    return (
        <>
            <div className='my-5'>
                <div className='flex justify-end'>
                    {/* <button
                        onClick={() => handleModalOpen(<TaskForm title="Add Ticket Type" submitbtn="Add Ticket" handleClose={handleModalClose} />)}
                        className='outline-none border-none px-6 py-3 bg-pscdarkblue text-white rounded'>Add Ticket</button> */}

                </div>
            </div>
        </>
    );
};

export default AddTaskButton;
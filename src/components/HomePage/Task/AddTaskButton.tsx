import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsModalOpen, setModalContent } from '@/redux/features/other/otherStateSlice';
import TaskForm from './TaskForm';

const AddTaskButton: React.FC = () => {
    const dispatch = useDispatch();

    const handleModalOpen = (content: React.ReactNode) => {
        dispatch(setIsModalOpen(true));
        dispatch(setModalContent(content));
    };

    const handleModalClose = () => {
        dispatch(setIsModalOpen(false));
        dispatch(setModalContent(""));
    };

    return (
        <div className='my-5'>
            <div className='flex justify-end'>
                <button
                    onClick={() => handleModalOpen(
                        <TaskForm
                            title="Add Task"
                            submitBtn="Add Task"
                            handleClose={handleModalClose}
                        />
                    )}
                    className='outline-none border-none px-6 py-3 bg-pscdarkblue text-white rounded'
                >
                    Add Ticket
                </button>
            </div>
        </div>
    );
};

export default AddTaskButton;
import { deleteTask } from '@/redux/features/task/taskStateSlice';
import { ToastMessage } from '@/utils/ToastMessage';
import React from 'react';
import { useDispatch } from 'react-redux';

interface DeleteTaskFormProps {
    handleClose: () => void;
    id?: number;
}

const DeleteTaskForm: React.FC<DeleteTaskFormProps> = ({ handleClose, id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (id !== undefined) {
            dispatch(deleteTask(id));
            handleClose();
            ToastMessage.notifySuccess("Ticket Type Deleted Successfully");
        } else {
            ToastMessage.notifyError("Invalid Task ID");
        }
    };

    return (
        <div>
            <div className="flex flex-col gap-y-10 items-center justify-center">
                <div>
                    <p className='text-xl'> Are You Sure You Want To Delete This Ticket Type?</p>
                </div>
                <div className='flex justify-center gap-8'>
                    <div
                        onClick={handleClose}
                        className='px-3 py-2 bg-[#1A1A40] text-white rounded cursor-pointer'>
                        Cancel
                    </div>
                    <div
                        onClick={handleDelete}
                        className='px-3 py-2 bg-[#A13333] text-white rounded cursor-pointer'>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteTaskForm;
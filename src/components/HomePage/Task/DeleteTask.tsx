import { Task } from '@/interfaces/task';
import { deleteTask } from '@/redux/features/task/taskSlice';
import { ToastMessage } from '@/utils/ToastMessage';
import React from 'react';
import { useDispatch } from 'react-redux';

interface DeleteTaskFormProps {
    setIsModalOpen: (value: boolean) => void,
    data?: Task | null;
}

const DeleteTask: React.FC<DeleteTaskFormProps> = ({ setIsModalOpen, data }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        if (data !== undefined) {
            dispatch(deleteTask(data?.id));
            setIsModalOpen(false)
            ToastMessage.notifySuccess("Task Deleted Successfully");
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
                        onClick={() => {
                            setIsModalOpen(false)
                        }}
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

export default DeleteTask;
import React from 'react';
import { useDispatch } from 'react-redux';
import RightNav from './RightNav/RightNav';
import Modal from '@/components/Common/Modal';
import { setIsModalOpen } from '@/redux/features/other/otherStateSlice';
import AddTaskButton from '../Task/AddTaskButton';
import Table from '@/components/Common/Table';


const RightContent: React.FC = () => {
    const dispatch = useDispatch();


    const handleModalOpen = () => {
        dispatch(setIsModalOpen(true));
    };

    const handleModalClose = () => {
        dispatch(setIsModalOpen(false));
    };

    return (
        <>
            <Modal />
            <div className='flex flex-col'>
                <RightNav />
                <div className='my-[25px] mx-[45px]'>
                    <AddTaskButton />
                    <Table handleModalOpen={handleModalOpen} handleClose={handleModalClose} />
                </div>
            </div>
        </>
    );
};

export default RightContent;
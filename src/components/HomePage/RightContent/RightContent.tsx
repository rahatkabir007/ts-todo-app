import React from 'react';
import { useDispatch } from 'react-redux';
import RightNav from './RightNav/RightNav';
import Modal from '@/components/Common/Modal';
import { setIsModalOpen, setModalContent } from '@/redux/features/other/otherStateSlice';
import AddTaskButton from '../Task/AddTaskButton';
import Table from '@/components/Common/Table';


const RightContent: React.FC = () => {
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
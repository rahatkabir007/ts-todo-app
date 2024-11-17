// import React, { useStqate } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import RightNav from './RightNav/RightNav';
// import { RootState } from '@/redux/store';
import Modal from '@/components/Common/Modal';
// import { setIsModalOpen, setModalContent } from '@/redux/features/other/otherStateSlice';


const RightContent: React.FC = () => {

    return (
        <>
            <Modal />
            <div className='flex flex-col'>
                <RightNav />
                <div className='my-[25px] mx-[45px]'>
                    {/* <AddTicketButton handleModalOpen={handleModalOpen} handleClose={handleModalClose} /> */}
                    {/* <RightTable handleModalOpen={handleModalOpen} handleClose={handleModalClose} /> */}
                </div>
            </div>
        </>
    );
};

export default RightContent;
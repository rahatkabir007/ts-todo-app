import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars } from "react-icons/fa";
import { RootState } from '@/redux/store';
import { setOpen, setResponsiveOpen } from '@/redux/features/other/otherStateSlice';
import Image from 'next/image';
import { images } from '@/constants';


const RightNav: React.FC = () => {
    const dispatch = useDispatch();
    const { open, responsiveOpen } = useSelector((state: RootState) => state.otherStateSlice);

    return (
        <div className='flex flex-row py-6 justify-between shadow-xl'>
            <div className="flex-1 flex items-center pl-[24px]">
                <FaBars
                    className={`cursor-pointer hidden w-5 h-5 lg:block duration-300 text-black`}
                    onClick={() => {
                        console.log("fff");
                        dispatch(setOpen(!open));
                        dispatch(setResponsiveOpen(false));
                    }}
                />
                <FaBars
                    className={`cursor-pointer w-5 h-5 block lg:hidden duration-300 ease-in text-black`}
                    onClick={() => {
                        dispatch(setResponsiveOpen(!responsiveOpen));
                        dispatch(setOpen(true));
                    }}
                />
            </div>
            <div className='flex flex-row-reverse gap-2 items-center mr-5'>
                <div className=''>
                    <Image src={images.user} alt="" />
                </div>
                <div>
                    <span className='text-sm text-pscblack'>Hello, <span className='text-lg font-semibold'>Rahat Kabir</span></span>
                </div>
            </div>
        </div>
    );
};

export default RightNav;
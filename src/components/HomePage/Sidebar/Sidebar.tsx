"use client"
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';


const Sidebar: React.FC = () => {
    const { open, responsiveOpen } = useSelector((state: RootState) => state.otherStateSlice);

    return (
        <div
            className={`${open ? "w-[150px]" : "w-[65px] "
                } ${responsiveOpen ? "left-0" : "left-[-300px]"
                } h-screen fixed z-50 lg:left-0 lg:relative bg-psclightskyblue duration-500 py-10`}
        >
            <div className="flex gap-x-4 items-center">
                <span className={`w-[50px] flex justify-center mx-auto font-bold border px-2 py-1 border-psclightblack rounded cursor-pointer duration-500  ${open && "rotate-[360deg] w-[80%] px-10  text-xl"
                    }`}>Task</span>
            </div>
        </div>
    );
};

export default Sidebar;
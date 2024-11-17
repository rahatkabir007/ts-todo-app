"use client"

import Sidebar from "@/components/Sidebar/Sidebar";
import { setOpen, setResponsiveOpen } from "@/redux/features/other/otherStateSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { open, responsiveOpen } = useSelector((state: RootState) => state.otherStateSlice);
  const dispatch = useDispatch()

  return (

    <div className="flex h-screen overflow-y-hidden">
      <Sidebar />
      {responsiveOpen && (
        <div
          onClick={() => {
            dispatch(setOpen(!open));
            dispatch(setResponsiveOpen(false));
          }}
          className="fixed z-10 opacity-40 bg-black top-0 left-0 right-0 bottom-0"
        ></div>
      )}

      <div className="flex-1 overflow-y-auto">
        {/* <RightContent open={open} setOpen={setOpen} responsiveOpen={responsiveOpen} setResponsiveOpen={setResponsiveOpen} /> */}
      </div>
    </div>
  );
}

"use client"
import React, { useState } from "react";
import TaskForm from "./Task/TaskForm";
import Sidebar from "./Sidebar/Sidebar";
import { setOpen, setResponsiveOpen } from "@/redux/features/other/otherStateSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import RightNav from "./RightNav/RightNav";
import Modal from "../Common/Modal";
import Table from "../Common/Table";
import { Task } from "@/interfaces/task";


const HomePage: React.FC = () => {
    const { open, responsiveOpen } = useSelector((state: RootState) => state.otherStateSlice);
    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleAddTask = () => {
        setIsModalOpen(true);
    };

    const handleEdit = (task: Task) => {
        setSelectedTask(task);
        setIsEditModalOpen(true);
    };

    const handleDelete = (task: Task) => {
        setSelectedTask(task);
        setIsDeleteModalOpen(true);
    }
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
                <div className='flex flex-col'>
                    <RightNav />
                    <div className="container mx-auto p-6 my-[25px] flex flex-col gap-2">
                        <h1 className="text-2xl font-bold mb-4 flex">Tasks</h1>
                        <div className='flex flex-col gap-2'>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleAddTask}
                                    className='outline-none border-none px-6 py-3 bg-pscdarkblue text-white rounded'
                                >
                                    Add Ticket
                                </button>
                            </div>
                            <Table isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} isDeleteModalOpen={isDeleteModalOpen} setIsDeleteModalOpen={setIsDeleteModalOpen} handleEdit={handleEdit} handleDelete={handleDelete} selectedData={selectedTask} />
                        </div>

                        {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                            <TaskForm setIsModalOpen={setIsModalOpen} />
                        </Modal>}
                    </div>
                </div>
                {/* <RightContent /> */}
            </div>
        </div>

    );
};

export default HomePage;

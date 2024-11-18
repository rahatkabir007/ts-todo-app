"use client"
import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskFormModal from "./TaskFormModal";
import Sidebar from "../HomePage/Sidebar/Sidebar";
import { setOpen, setResponsiveOpen } from "@/redux/features/other/otherStateSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import RightNav from "../HomePage/RightContent/RightNav/RightNav";
import Modal from "../Common/Modal";
import Table from "../Common/Table";
import { deleteTask } from "@/redux/features/task/taskSlice";
import { Task } from "@/interfaces/task";


const HomePage: React.FC = () => {
    const { open, responsiveOpen } = useSelector((state: RootState) => state.otherStateSlice);
    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleAddTask = () => {
        setIsModalOpen(true);
    };

    const handleEdit = (task: Task) => {
        setSelectedTask(task);
        setIsEditModalOpen(true);
    };

    const handleDelete = (id: string) => {
        dispatch(deleteTask(id))
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
                    <div className="container mx-auto p-6">
                        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
                        <button
                            onClick={handleAddTask}
                            className="bg-green-500 text-white px-4 py-2 rounded mb-4"
                        >
                            Add Task
                        </button>

                        <Table isModalOpen={isEditModalOpen} setIsModalOpen={setIsEditModalOpen} handleEdit={handleEdit} handleDelete={handleDelete} selectedData={selectedTask} />

                        {/* {isModalOpen && <TaskFormModal onClose={handleCloseModal} />} */}
                        {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                            <TaskFormModal setIsModalOpen={setIsModalOpen} />
                        </Modal>}
                    </div>
                </div>
                {/* <RightContent /> */}
            </div>
        </div>

    );
};

export default HomePage;

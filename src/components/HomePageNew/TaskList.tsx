"use client"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import TaskFormModal from "./TaskFormModal";
import { deleteTask } from "@/redux/features/task/taskSlice";

const TaskList: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleEdit = (task: any) => {
        setSelectedTask(task);
        setIsEditModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedTask(null);
        setIsEditModalOpen(false);
    };

    return (
        <div className="my-5">
            <h2 className="text-xl font-bold mb-4">Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="border p-4 mb-2">
                        <h3 className="font-semibold">{task.name}</h3>
                        <p>Priority: {task.priority}</p>
                        <p>Status: {task.status}</p>
                        <p>Created At: {task.createdAt}</p>
                        <div className="flex gap-4">
                            <button
                                className="text-blue-500"
                                onClick={() => handleEdit(task)}
                            >
                                Edit
                            </button>
                            <button
                                className="text-red-500"
                                onClick={() => dispatch(deleteTask(task.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {isEditModalOpen && (
                <TaskFormModal
                    onClose={handleCloseModal}
                    defaultValues={selectedTask}
                />
            )}
        </div>
    );
};

export default TaskList;

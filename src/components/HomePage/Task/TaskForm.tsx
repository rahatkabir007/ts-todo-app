"use client"

import { Task } from "@/interfaces/task";
import { addTask, editTask } from "@/redux/features/task/taskSlice";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ToastMessage } from '@/utils/ToastMessage';

interface TaskFormProps {
    setIsModalOpen: (value: boolean) => void,
    defaultValues?: Task | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ setIsModalOpen, defaultValues }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm({
        defaultValues: defaultValues || {
            name: "",
            priority: "Medium",
            status: "Pending",
        },
    });

    const onSubmit = (data: Task) => {
        if (defaultValues) {
            dispatch(editTask({ ...data, id: defaultValues.id }));
            ToastMessage.notifySuccess("Task Updated Successfully");
        } else {
            dispatch(addTask({ ...data, id: uuidv4(), createdAt: new Date().toISOString() }));
            ToastMessage.notifySuccess("Task Added Successfully");
        }
        reset();
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold mb-4">{defaultValues ? "Edit Task" : "Add Task"}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    placeholder="Task Name"
                    className="border p-2 mb-4 w-full"
                />
                <select {...register("priority")} className="border p-2 mb-4 w-full">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                {defaultValues && (
                    <select {...register("status")} className="border p-2 mb-4 w-full">
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                )}
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        {defaultValues ? "Update" : "Add"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;

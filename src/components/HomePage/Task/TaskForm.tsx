"use client";

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
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
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
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-base">
                        Task Name <sup className="text-red-700">*  {errors.name && <span className="text-red-700 text-sm">is required</span>}</sup>
                    </label>
                    <input
                        {...register("name", { required: true })}
                        placeholder="Task Name"
                        className="border p-2 mb-4 w-full border-pscblack rounded-lg"
                    />

                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-base">
                        Priority <sup className="text-red-700">*  {errors.priority && <span className="text-red-700 text-sm">is required</span>}</sup>
                    </label>
                    <select {...register("priority", { required: true })} className="border p-2 mb-4 w-full border-pscblack rounded-lg">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                </div>
                {defaultValues && (
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-base">
                            Status <sup className="text-red-700">*  {errors.status && <span className="text-red-700 text-sm">is required</span>}</sup>
                        </label>
                        <select
                            {...register("status", { required: true })}
                            className="border p-2 mb-4 w-full border-pscblack rounded-lg"
                            disabled={defaultValues.status === "Completed"}
                        >
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                )}
                <div className="flex justify-end">
                    <button type="submit" className="bg-pscdarkblue text-white px-4 py-2 rounded">
                        {defaultValues ? "Update" : "Add"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
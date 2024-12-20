import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import Modal from './Modal';
import { Task } from '@/interfaces/task';
import TaskForm from '../HomePage/Task/TaskForm';
import DeleteTask from '../HomePage/Task/DeleteTask';
import dayjs from 'dayjs';
import { RootState } from '@/redux/store';

interface TableProps {
    isEditModalOpen: boolean,
    setIsEditModalOpen: (value: boolean) => void,
    isDeleteModalOpen: boolean,
    setIsDeleteModalOpen: (value: boolean) => void,
    handleEdit: (task: Task) => void,
    handleDelete: (task: Task) => void,
    selectedData: Task | null
}

const Table: React.FC<TableProps> = ({ isEditModalOpen, setIsEditModalOpen, isDeleteModalOpen, setIsDeleteModalOpen, handleEdit, handleDelete, selectedData }) => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(5);
    const [priorityFilter, setPriorityFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const tableHeaders = [
        "Task No.",
        "Task Name",
        "Priority",
        "Status",
        "Created At",
        "Actions"
    ];

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;

    const filteredTasks = tasks.filter(task => {
        return (priorityFilter ? task.priority === priorityFilter : true) &&
            (statusFilter ? task.status === statusFilter : true);
    });

    const currentTableTypes = filteredTasks.slice(indexOfFirstData, indexOfLastData);

    return (
        <div className="py-5 rounded w-full">
            <div className="flex justify-end mb-4">
                <div className="w-1/4 flex gap-4">
                    <div className='flex flex-col gap-2'>
                        <label className="font-semibold text-base">Filter by Priority</label>
                        <select
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                            className="border p-2 mb-4 w-full border-pscblack rounded-lg"
                        >
                            <option value="">All</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className="font-semibold text-base">Filter by Status</label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="border p-2 mb-4 w-full border-pscblack rounded-lg"
                        >
                            <option value="">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                currentTableTypes?.length === 0 ? (
                    <div className='flex justify-center items-center'>
                        <span className="text-xl font-medium">No Task Available</span>
                    </div>
                ) : (
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 ">
                        <div className="inline-block min-w-full shadow overflow-hidden">
                            <table className="min-w-full leading-normal overflow-x-auto">
                                <thead>
                                    <tr>
                                        {tableHeaders.map((header, idx) => (
                                            <th
                                                key={idx}
                                                className="px-3 py-8 border-b-2 text-center border-gray-200 bg-gray-100 text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                                <span className="flex">
                                                    <span className="flex-1">{header}</span>
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTableTypes?.map((data, index) => {
                                        const uniqueIndex = (currentPage - 1) * dataPerPage + index + 1;
                                        return (
                                            <tr key={index} className="even:bg-gray-50 odd:bg-white text-center">
                                                <td className="px-3 py-5 text-sm">
                                                    <p className="text-gray-900 ">{uniqueIndex > indexOfLastData ? uniqueIndex - (indexOfLastData - dataPerPage) : uniqueIndex}</p>
                                                </td>
                                                <td className="px-3 py-5 text-sm">
                                                    <p className="text-gray-900 ">{data?.name}</p>
                                                </td>
                                                <td className="px-3 py-3 text-sm capitalize">
                                                    <p className="text-gray-900 ">
                                                        {data?.priority ? data?.priority : "N/A"}
                                                    </p>
                                                </td>
                                                <td className="px-3 py-3 text-sm capitalize">
                                                    <p className="text-gray-900 ">
                                                        {data?.status ? data?.status : "N/A"}
                                                    </p>
                                                </td>
                                                <td className="px-3 py-3 text-sm capitalize">
                                                    <p className="text-gray-900 ">
                                                        {data?.createdAt ? dayjs(data?.createdAt).format("DD-MM-YYYY") : "N/A"}
                                                    </p>
                                                </td>
                                                <td className="px-2 py-3 text-sm">
                                                    <button
                                                        onClick={() => handleEdit(data)}
                                                    >
                                                        <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                                                            <span
                                                                style={{ boxShadow: "0 2px 6px #acb5f6" }}
                                                                className="h-8 w-8 inset-0 bg-blue-700 rounded relative text-white flex justify-center items-center"
                                                            >
                                                                <FaEdit />
                                                            </span>
                                                        </span>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(data)}>
                                                        <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                                                            {data && (
                                                                <span
                                                                    style={{ boxShadow: "0 2px 6px #fd9b96" }}
                                                                    className="h-8 w-8 inset-0 bg-red-500 rounded relative text-white flex justify-center items-center"
                                                                >
                                                                    <FaTrash />
                                                                </span>
                                                            )}
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="px-5 py-5 border-t flex justify-between items-center">
                                <div>
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing {indexOfFirstData + 1} to {Math.min(indexOfLastData, tasks.length)} of {tasks?.length} Entries
                                    </span>
                                </div>
                                <div className="inline-flex xs:mt-0">
                                    <Pagination
                                        dataPerPage={dataPerPage}
                                        totalDatas={tasks?.length}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {isEditModalOpen && <Modal isModalOpen={isEditModalOpen} setIsModalOpen={setIsEditModalOpen}>
                <TaskForm setIsModalOpen={setIsEditModalOpen} defaultValues={selectedData} />
            </Modal>}
            {
                isDeleteModalOpen && <Modal isModalOpen={isDeleteModalOpen} setIsModalOpen={setIsDeleteModalOpen}>
                    <DeleteTask setIsModalOpen={setIsDeleteModalOpen} data={selectedData} />
                </Modal>
            }
        </div>
    );
};

export default Table;
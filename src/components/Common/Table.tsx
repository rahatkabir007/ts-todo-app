import { RootState } from '@/redux/store';
import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector } from 'react-redux';
import TaskForm from '../HomePage/Task/TaskForm';
import DeleteTaskForm from '../HomePage/Task/DeleteTaskForm';
import Pagination from './Pagination';

interface TableProps {
    handleModalOpen: (content: React.ReactNode) => void;
    handleClose: () => void;
}

const Table: React.FC<TableProps> = ({ handleModalOpen, handleClose }) => {
    const { tasks } = useSelector((state: RootState) => state.taskStateSlice);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(5);
    const tableHeaders = [
        "Ticket No.",
        "Ticket Type",
        "Description",
        "Actions"
    ];

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentTableTypes = tasks.slice(indexOfFirstData, indexOfLastData);

    return (
        <div className="py-5 rounded w-full">
            {
                tasks?.length === 0 ? (
                    <div className='flex justify-center items-center'>
                        <span className="text-xl font-medium">No Ticket Type Available</span>
                    </div>
                ) : (
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
                        <div className="inline-block min-w-full shadow overflow-hidden">
                            <table className="min-w-full leading-normal">
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
                                                    <p className="text-gray-900 ">{data?.taskType}</p>
                                                </td>
                                                <td className="px-3 py-3 text-sm capitalize">
                                                    <p className="text-gray-900 ">
                                                        {data?.description ? data?.description : "No Description Available"}
                                                    </p>
                                                </td>
                                                <td className="px-2 py-3 text-sm">
                                                    <button
                                                        onClick={() => handleModalOpen(
                                                            <TaskForm
                                                                title="Edit Task"
                                                                submitBtn="Save Changes"
                                                                handleClose={handleClose}
                                                                data={data}
                                                            />
                                                        )}
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
                                                        onClick={() => handleModalOpen(
                                                            <DeleteTaskForm handleClose={handleClose} id={data?.id} />
                                                        )}
                                                    >
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
        </div>
    );
};

export default Table;
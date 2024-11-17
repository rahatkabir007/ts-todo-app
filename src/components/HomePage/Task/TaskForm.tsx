// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';


// interface TaskFormProps {
//     title: string;
//     submitBtn: string;
//     handleClose: () => void;
//     data?: {
//         id?: number;
//         taskType: string;
//         description: string;
//     };
// }

// interface FormValues {
//     taskType: string;
//     description: string;
// }

// const TaskForm: React.FC<TaskFormProps> = ({ title, submitBtn, handleClose, data }) => {
//     const [values, setValues] = useState<FormValues>({
//         taskType: '',
//         description: ''
//     });

//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (!data) {
//             return;
//         }
//         setValues({
//             taskType: data.taskType,
//             description: data.description
//         });
//     }, [data]);

//     const handleAdd = (e: React.FormEvent<HTMLFormElement>, submitbtn: string) => {
//         e.preventDefault();
//         if (submitbtn === "Add Task") {
//             if (!values.taskType) {
//                 ToastMessage.notifyError("Please Fill Up Task Type Field");
//                 return;
//             }
//             dispatch(addTaskType({
//                 id: Math.floor(Math.random() * 1000),
//                 taskType: values.taskType,
//                 description: values.description
//             }));
//             ToastMessage.notifySuccess("Task Type Added Successfully");
//         } else {
//             if (!values.taskType) {
//                 ToastMessage.notifyError("Please Fill Up Task Type Field");
//                 return;
//             }
//             if (
//                 values.taskType === data?.taskType &&
//                 values.description === data?.description
//             ) {
//                 ToastMessage.notifyInfo("No changes made");
//                 handleClose();
//                 return;
//             }
//             dispatch(editTaskType({
//                 id: data?.id,
//                 taskType: values.taskType,
//                 description: values.description
//             }));
//             ToastMessage.notifySuccess("Task Type Edited Successfully");
//         }
//         handleClose();
//     };

//     return (
//         <div className='p-6 flex flex-col gap-y-2'>
//             <div className='w-full border-psclightblack border-b-4 pb-2'>
//                 <span className='text-xl font-medium text-pscdarkblue'>{title}</span>
//             </div>
//             <div className="py-5">
//                 <form onSubmit={(e) => handleAdd(e, submitbtn)}>
//                     <div className="mb-4">
//                         <label className="block text-pscdarkblue text-lg font-bold mb-2" htmlFor="taskType">
//                             Task Type {!values.taskType && <sup className='text-red-700'>*</sup>}
//                         </label>
//                         <input
//                             className="appearance-none bg-gray-200 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
//                             id="taskType"
//                             type="text"
//                             placeholder="Task Type"
//                             value={values.taskType}
//                             onChange={(e) => setValues({ ...values, taskType: e.target.value })}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-pscdarkblue text-lg font-bold mb-2" htmlFor="description">
//                             Description
//                         </label>
//                         <textarea
//                             rows={10}
//                             style={{ resize: 'none' }}
//                             className="appearance-none bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-700"
//                             id="description"
//                             placeholder="Description"
//                             value={values.description}
//                             onChange={(e) => setValues({ ...values, description: e.target.value })}
//                         />
//                     </div>
//                     <div className="flex justify-center">
//                         <button
//                             className="bg-pscdarkblue hover:bg-pscdarkblue text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
//                             type="submit"
//                         >
//                             {submitbtn}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default TaskForm;
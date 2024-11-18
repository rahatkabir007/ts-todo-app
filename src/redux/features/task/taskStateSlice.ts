import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    id: number;
    taskType: string;
    description: string;
}

interface TasksState {
    tasks: Task[];
}

// Initial state
const initialState: TasksState = {
    tasks: [],
};

// Task state slice
export const taskStateSlice = createSlice({
    name: 'taskStateSlice',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            const newTask = action.payload;
            state.tasks.push(newTask);
        },
        editTask: (state, action: PayloadAction<Task>) => {
            const editedTask = action.payload;
            state.tasks = state.tasks.map((task) => {
                if (task.id === editedTask.id) {
                    return editedTask;
                }
                return task;
            });
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            const deletedTaskId = action.payload;
            state.tasks = state.tasks.filter(
                (task) => task.id !== deletedTaskId
            );
        },
    },
});

export const {
    addTask,
    editTask,
    deleteTask,
} = taskStateSlice.actions;

export default taskStateSlice.reducer;
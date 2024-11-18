export interface Task {
    id: string;
    name: string;
    priority: "High" | "Medium" | "Low";
    status: "Pending" | "Completed";
    createdAt: string;
}


export interface TaskState {
    tasks: Task[];
}

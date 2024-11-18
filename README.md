# Task Management App

A fully responsive Task Management App built with Next.js 14 and TypeScript. The app includes essential task management features such as adding, editing, deleting, and filtering tasks. The application also leverages Redux Toolkit for state management and persists task data using `redux-persist` for local storage. It includes a clean and modern UI, implemented using Tailwind CSS, and follows a modular design with Next.js 14’s layout structure.

## 🚀 Features

- **Add New Task**: Create tasks with details including task name, priority, and status.
- **Edit Task**: Update task details using an intuitive edit modal form.
- **Delete Task**: Easily remove tasks with a confirmation modal.
- **Filter Tasks**: Filter tasks based on priority (High, Medium, Low) and status (Pending, Completed).
- **Responsive Design**: The app is fully responsive and adapts seamlessly across mobile, tablet, and desktop devices.
- **Persistent Data Storage**: Uses Redux Persist to save task data locally, ensuring data remains available even after page reloads.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Persistence**: [Redux Persist](https://github.com/rt2zz/redux-persist)
- **Form Handling & Validation**: [React Hook Form](https://react-hook-form.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 📂 Project Structure

The project follows Next.js 14's file-based routing and layout structure. Where in src folder the routing is happening inside app folder. The other code is inside components, features, and store folders.


## 🌟 Key Features & Implementation

### 1. Task Management

- The task list is displayed in a table format using a responsive design.
- Each task entry shows the **Task Name**, **Creation Date**, **Priority**, and **Status**.
- The task table includes **Edit** and **Delete** buttons:
  - Clicking **Edit** opens a modal with a pre-filled form using `React Hook Form` for validation.
  - Clicking **Delete** opens a confirmation modal before removing the task.

### 2. State Management with Redux Toolkit

- The task data is managed using Redux Toolkit's `createSlice` for efficient state updates.
- The `tasksSlice.ts` file defines actions for adding, editing, and deleting tasks.
- Some other states are managed on `otherStateSlice.ts` file.
- Task data is persisted locally using `redux-persist`, ensuring that the state is maintained across page reloads.

### 3. Form Validation with React Hook Form

- Both the **Add Task** and **Edit Task** are in one form and built using `React Hook Form`.
- Validation rules include:
  - Task Name: Required field.
  - Priority: Must be one of "High", "Medium", or "Low".
  - Status: Must be one of "Pending" or "Completed".
- Error messages are displayed dynamically based on form validation.

### 4. Filtering & Pagination

- Users can filter tasks based on **Priority** (High, Medium, Low) and **Status** (Pending, Completed) using dropdown selectors.
- The task list includes a pagination component for better navigation when dealing with a large number of tasks.

### 5. Responsive Design with Tailwind CSS

- The app uses **Tailwind CSS** for styling, ensuring a consistent and modern look across devices.
- The layout includes a sidebar for navigation, with the main content area displaying the task list and forms.

## 🛠️ Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rahatkabir007/ts-todo-app.git


### 2. **Install dependencies:**

   ```bash
   cd ts-todo-app
   npm install
   ```

### 3. **Run the development server:**

   ```bash
    npm run dev
    ```

    The app will be available at http://localhost:3000.


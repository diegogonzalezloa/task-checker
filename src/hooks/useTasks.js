// Import hooks
import { useState, useMemo, useCallback } from "react";

// Util
import { initialTasks } from "../utils/taskList";

export function useTasks() {
    // Initialize state using the array from utils. And modify state logic for persistence
    const [tasks, setTasks] = useState(() => {
        // Check Local Storage first, fall back to utils array if empty
        const saved = localStorage.getItem("localTasks");
        return saved ? JSON.parse(saved) : initialTasks;
    });

    // Sorted Tasks
    // It is used useMemo method so that React only runs this sorting logic when the tasks array changes.
    const sortedTasks = useMemo(() => {
        return [...tasks].sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time || "11:59:999 PM"}`);
            const dateB = new Date(`${b.date} ${b.time || "11:59:999 PM"}`);
            return dateA - dateB;
        });
    }, [tasks]);

    // Add new task object to existing tasks array
    const handleNewTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        // Save to browser memory
        localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
    };

    // Edit existing task object
    const handleEditTask = (editedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === editedTask.id ? editedTask : task
        );

        setTasks(updatedTasks);
        // Save to browser memory
        localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
    };

    // Toggle task between active and completed
    const handleIsCompleted = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        );

        setTasks(updatedTasks);
        // Save to browser memory
        localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
    };

    // Handle delete task
    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        // Save to browser memory
        localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
    };

    return [
        sortedTasks,
        handleNewTask,
        handleEditTask,
        handleIsCompleted,
        handleDeleteTask,
    ];
}

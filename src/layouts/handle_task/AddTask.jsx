// Import dependency
import { useState } from "react";

// Import component
import InputTitle from "./inputs/title";
import InputDate from "./inputs/date";
import InputTime from "./inputs/time";
import InputPriority from "./inputs/priority";
import Button from "../../components/Button";
import InputFolder from "./inputs/folder";

function AddTask({
    toggleModal,
    currTaskHandle,
    handleNewTask,
    handleEditTask,
}) {
    // Initial state for the form
    const initialState = {
        title: "",
        date: "",
        time: "",
        priority: "",
        folder: "",
    };

    const [task, setTask] = useState(
        currTaskHandle.type === "edit" ? currTaskHandle.task : initialState
    );

    // Handle input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation check
        if (!task.title || !task.date) {
            alert("Please fill in the required fields: Title and Date.");
            return;
        }

        // Create the final task object
        if (currTaskHandle.type === "new") {
            const newTaskObject = {
                id: Date.now(), // specific unique ID
                ...task,
                // createdAt: new Date().toISOString(),
                isCompleted: false,
            };

            // Export the object (pass it to parent)
            handleNewTask && handleNewTask(newTaskObject);
        } else {
            // Pass the edited task
            handleEditTask(task);
        }

        toggleModal(null, null);

        // Reset form
        setTask(initialState);
    };

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-y-5 text-left [&_label]:block [&_label]:mb-1 [&_label]:font-medium [&_label>span]:text-red-500 [&_input]:w-full [&_input]:p-2 [&_input]:border [&_input]:border-neutral-400 [&_input]:rounded-lg [&_input]:placeholder:text-neutral-450 [&_input]:focus:border-stormyTeal [&_input]:focus:outline-none [&_select]:w-full [&_select]:p-2 [&_select]:border [&_select]:border-neutral-400 [&_select]:rounded-lg [&_select]:focus:border-stormyTeal"
        >
            {/* Title - Required */}
            <InputTitle title={task.title} handleChange={handleChange} />

            {/* Date - Required */}
            <InputDate
                type={currTaskHandle.type}
                date={task.date}
                handleChange={handleChange}
            />

            {/* Time */}
            <InputTime time={task.time} handleChange={handleChange} />

            {/* Priority */}
            <InputPriority
                handleChange={handleChange}
                taskPriority={task.priority}
            />

            {/* Folder */}
            <InputFolder handleChange={handleChange} taskFolder={task.folder} />

            {/* Submit */}
            <Button
                type="submit"
                content={
                    currTaskHandle.type === "new"
                        ? "Create Task"
                        : "Save Editing"
                }
                className="mx-auto mt-3 px-6 py-3 bg-teal hover:bg-stormyTeal text-white"
            />
        </form>
    );
}

export default AddTask;

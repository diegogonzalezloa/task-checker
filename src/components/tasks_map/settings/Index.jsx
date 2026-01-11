// Import icon
import ThreeDots from "../../../assets/icons/ThreeDots";

function Settings({
    task,
    setActiveId,
    isClicked,
    toggleHandleTask,
    handleDeleteTask,
}) {
    // Handle toggle setting
    const handleToggle = (e, id) => {
        // It prevents the 'window' click listener from firing
        // so the selection stays active.
        e.stopPropagation();

        // If the clicked ID is ALREADY the active one, clear it (null).
        // Otherwise, set it as the new active ID.
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="relative [&_button]:cursor-pointer">
            <button onClick={(e) => handleToggle(e, task.id)}>
                <ThreeDots className="w-3 fill-black" />
            </button>
            {isClicked && (
                <div className="absolute top-1.5 right-3.5 z-10 flex flex-col w-30 py-3 text-black bg-white border border-neutral-200/70 shadow-md *:text-left *:px-3 *:py-1 *:hover:bg-neutral-100">
                    <button
                        onClick={() => toggleHandleTask("edit", task)}
                        aria-label="Edit task"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDeleteTask(task.id)}
                        aria-label="Delete task"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}

export default Settings;

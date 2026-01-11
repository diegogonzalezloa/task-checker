// Import components
import Close from "../../assets/icons/Close";
import AddTask from "./AddTask";

function ModalWindow({
    toggleModal,
    currTaskHandle,
    handleNewTask,
    handleEditTask,
}) {
    return (
        <div className="fixed top-0 left-0 z-1000 h-screen w-screen grid place-items-center p-6 bg-black/80">
            <div className="w-full max-w-140 p-6 bg-white">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-semibold">
                        {currTaskHandle.type === "new"
                            ? "Quick Add Task"
                            : "Edit Task"}
                    </h3>
                    <button
                        className="cursor-pointer"
                        onClick={() => toggleModal(null, null)}
                    >
                        <Close className="w-3.5 stroke-black/45" />
                    </button>
                </div>
                <AddTask
                    toggleModal={toggleModal}
                    currTaskHandle={currTaskHandle}
                    handleNewTask={handleNewTask}
                    handleEditTask={handleEditTask}
                />
            </div>
        </div>
    );
}

export default ModalWindow;

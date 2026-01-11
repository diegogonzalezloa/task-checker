import { useEffect } from "react";

// Import components
import ModalWindow from "./ModalWindow";

function HandleTask({
    isOpen,
    toggleModal,
    currTaskHandle,
    handleNewTask,
    handleEditTask,
}) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <ModalWindow
                    toggleModal={toggleModal}
                    currTaskHandle={currTaskHandle}
                    handleNewTask={handleNewTask}
                    handleEditTask={handleEditTask}
                />
            )}
        </>
    );
}

export default HandleTask;

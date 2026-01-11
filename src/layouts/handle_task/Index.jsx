// Import components
import ModalWindow from "./ModalWindow";

function HandleTask({
    isOpen,
    toggleModal,
    currTaskHandle,
    handleNewTask,
    handleEditTask,
}) {
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

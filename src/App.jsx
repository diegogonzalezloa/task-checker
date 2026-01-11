// Import dependencies
import { useState } from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

// Import custom Hook
import { useTasks } from "./hooks/useTasks";

// Import layouts components
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import HandleTask from "./layouts/handle_task/Index";

// Import page components
import Home from "./pages/home";
import Calendar from "./pages/calendar";
import Tasks from "./pages/tasks";
import Priorities from "./pages/priorities";
import Reminders from "./pages/reminders";

// A wrapper component because useLocation must be used inside the <Router> context.
const AppContent = () => {
    const location = useLocation();

    // Sort the tasks in ascending order according to whether or not they are completed. And two functions to add a new tasks and to toggle a task depending on is completed.
    const [
        tasks,
        handleNewTask,
        handleEditTask,
        handleIsCompleted,
        handleDeleteTask,
    ] = useTasks();

    // State of task item to handle
    const [currTaskHandle, setCurrTaskHandle] = useState({
        type: null,
        id: null,
    });

    // State  to toggle the handle task window
    const [isOpenHandleTask, setIsOpenHandleTask] = useState(false);

    // Function to toggle a modal window for handle task
    const toggleHandleTask = (taskType, editedTask) => {
        setIsOpenHandleTask(!isOpenHandleTask);
        setCurrTaskHandle({ type: taskType, task: editedTask });
    };

    return (
        <>
            {/* Header */}
            <Header />

            {/* Routers */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            tasks={tasks}
                            handleIsCompleted={handleIsCompleted}
                            toggleHandleTask={toggleHandleTask}
                            handleDeleteTask={handleDeleteTask}
                        />
                    }
                />
                <Route
                    path="/calendar"
                    element={<Calendar className="bg-red-300" />}
                />
                <Route
                    path="/tasks"
                    element={<Tasks className="bg-gray-300" />}
                />
                <Route
                    path="/priorities"
                    element={<Priorities className="bg-blue-300" />}
                />
                <Route
                    path="/reminders"
                    element={<Reminders className="bg-orange-300" />}
                />
            </Routes>

            {/* Footer */}
            {/* Conditional Rendering: Only show Footer if path is exactly " */}
            {location.pathname === "/" && <Footer />}

            {/* Handle Task */}
            <HandleTask
                isOpen={isOpenHandleTask}
                toggleModal={toggleHandleTask}
                currTaskHandle={currTaskHandle}
                handleNewTask={handleNewTask}
                handleEditTask={handleEditTask}
            />
        </>
    );
};

// App component
function App() {
    return (
        <div className="[&>main]:mt-17">
            <Router>
                <AppContent />
            </Router>
        </div>
    );
}

export default App;

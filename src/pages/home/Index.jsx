// Import components
import Cover from "./Cover";
import UpcomingTasks from "./UpcomingTasks";
import Overview from "./Overview";
import Stats from "./Stats";
import Trial from "./Trial";

// Import custom hook
import usePageTitle from "../../hooks/usePageTitle";

function Home({
    tasks,
    handleIsCompleted,
    toggleHandleTask,
    handleDeleteTask,
}) {
    usePageTitle("TaskChecker");

    return (
        <main>
            <Cover toggleHandleTask={toggleHandleTask} />
            <UpcomingTasks
                tasks={tasks}
                handleIsCompleted={handleIsCompleted}
                toggleHandleTask={toggleHandleTask}
                handleDeleteTask={handleDeleteTask}
            />
            <Overview />
            <Stats />
            <Trial />
        </main>
    );
}

export default Home;

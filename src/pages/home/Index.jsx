// Import components
import Cover from "./Cover";
import UpcomingTasks from "./UpcomingTasks";
import Overview from "./Overview";
import Stats from "./Stats";
import Trial from "./Trial";

function Home({
    tasks,
    handleIsCompleted,
    toggleHandleTask,
    handleDeleteTask,
}) {
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

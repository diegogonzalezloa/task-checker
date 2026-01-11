// Import dependencies
import { Link } from "react-router-dom";

// Import components
import TasksMap from "../../components/tasks_map/Index";
import Button from "../../components/Button";

function UpcomingTasks({
    tasks,
    handleIsCompleted,
    toggleHandleTask,
    handleDeleteTask,
}) {
    return (
        <section className="px-5 md:px-10 lg:px-15 py-16 bg-neutral-50">
            <div className="max-w-480 mx-auto">
                <div className="flex justify-between mb-8">
                    <div className="max-w-42 sm:max-w-none">
                        <h2 className="mb-3">Upcoming Tasks</h2>
                        <p className="text-black/80">
                            Stay ahead with your scheduled activities
                        </p>
                    </div>
                    <Link to={"/tasks"} className="h-max">
                        <Button
                            content="View All Tasks"
                            type="button"
                            className="px-3 py-2 text-stormyTeal border-2 border-stormyTeal hover:text-white hover:bg-stormyTeal"
                        />
                    </Link>
                </div>
                <TasksMap
                    type="active"
                    tasks={tasks}
                    handleIsCompleted={handleIsCompleted}
                    toggleHandleTask={toggleHandleTask}
                    handleDeleteTask={handleDeleteTask}
                />
                <div className="mt-10">
                    <h2>Completed Tasks</h2>
                    <div className="mt-5">
                        <TasksMap
                            type="completed"
                            tasks={tasks}
                            handleIsCompleted={handleIsCompleted}
                            toggleHandleTask={toggleHandleTask}
                            handleDeleteTask={handleDeleteTask}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpcomingTasks;

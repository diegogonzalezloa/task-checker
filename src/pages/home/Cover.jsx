// Import dependencies
import Aurora from "../../components/backgrounds/Aurora";
import { Link } from "react-router-dom";

// Import components
// import NewTask from "../../components/new_task/Index";
import Button from "../../components/Button";
import Plus from "../../assets/icons/Plus";

function Cover({ toggleHandleTask }) {
    // Inicialice const
    const buttonContent = [
        <Plus key={0} className="w-3 stroke-white" />,
        <span key={1}>Quick Add Task</span>,
    ];

    return (
        <section className="relative text-center">
            {/* The Aurora background */}
            <div className="absolute -z-1 w-full h-full opacity-15">
                <Aurora
                    colorStops={["#88B7C0", "#88B7C0", "#88B7C0"]}
                    blend={0.25}
                    amplitude={1.1}
                    speed={1}
                />
            </div>

            {/* Cover content */}
            <div className="relative flex flex-col items-center gap-y-14 px-5 py-18">
                <h2 className="max-w-80 md:max-w-120 lg:max-w-160 mx-auto text-5xl font-semibold">
                    Organize Your Life with{" "}
                    <span className="text-teal">Smart Task Management</span>
                </h2>
                <p className="max-w-180 mx-auto text-black/80">
                    Stay on top of your tasks with user-friendly calendar
                    integration, intelligent prioritization, and customizable
                    reminders that sync seamlessly across all your devices.
                </p>
                <div className="grid gap-y-5 place-items-center">
                    {/* <NewTask handleNewTask={handleNewTask} /> */}
                    <Button
                        className="flex items-center gap-x-3 py-3 px-6 bg-teal hover:bg-stormyTeal text-white hover:shadow-lg hover:shadow-black/20"
                        content={buttonContent}
                        onClick={() => toggleHandleTask("new", null)}
                    />
                    <Link to="/calendar">
                        <Button
                            content="View Calendar"
                            type="button"
                            className="py-3 px-6 border-2 bg-white border-neutral-200 hover:text-stormyTeal hover:border-stormyTeal"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Cover;

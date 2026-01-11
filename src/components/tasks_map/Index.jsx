// Import dependency
import { useState, useEffect } from "react";
import styled from "styled-components";
import { isPast, isToday } from "date-fns";

// Priority colors object
const priorityColors = {
    high: { text: "#e7000b", bg: "#ffe2e2", border: "#ffa2a2" },
    medium: { text: "#e17100", bg: "#fef3c6", border: "#ffd230" },
    low: { text: "#009966", bg: "#d0fae5", border: "#5ee9b5" },
};

// Create styled components
const TaskContainer = styled.li`
    &:hover {
        color: ${(props) => props.type[0].text};
        border-color: ${(props) => props.type[0].border};
        box-shadow: ${(props) =>
            !props.type[1]
                ? "0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.03)"
                : "none"};
    }
`;

// Import components
import Checkbox from "./CheckBox";
import PriorityTag from "./PriorityTag";
import Settings from "./settings/Index";
import Title from "./Title";
import DateTime from "./DateTime";
import Folder from "./Folder";

function TasksMap({
    type,
    tasks,
    handleIsCompleted,
    handleDeleteTask,
    toggleHandleTask,
}) {
    // Filter tasks between active and completed
    const tasksArr =
        type === "active"
            ? tasks.filter((task) => !task.isCompleted)
            : tasks.filter((task) => task.isCompleted);

    // Inicial state
    const [activeId, setActiveId] = useState(null);

    // When component updating
    useEffect(() => {
        // This function runs whenever the user clicks anywhere on the window
        const clearSelection = () => {
            setActiveId(null);
        };

        window.addEventListener("click", clearSelection);

        return () => window.removeEventListener("click", clearSelection);
    }, []);

    return (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {tasksArr.length > 0 ? (
                tasksArr.map((task) => {
                    const colors = priorityColors[task.priority] || {};
                    const isClicked = activeId === task.id;
                    const isPastDate = isPast(
                        new Date(`${task.date} ${task.time || "11:59:999 PM"}`)
                    );

                    return (
                        <TaskContainer
                            key={task.id}
                            type={[
                                task.isCompleted ? {} : colors,
                                task.isCompleted,
                            ]}
                            title={
                                isPastDate && type === "active"
                                    ? "You've gone over time!"
                                    : ""
                            }
                            className="p-5 bg-white border border-neutral-200/70 rounded-2xl animate-all duration-50ms"
                        >
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex items-center gap-x-3.5">
                                    <Checkbox
                                        type={type}
                                        onChange={() =>
                                            handleIsCompleted(task.id)
                                        }
                                    />
                                    {task.priority && (
                                        <PriorityTag
                                            priority={task.priority}
                                            colors={colors}
                                        />
                                    )}
                                </div>
                                <Settings
                                    task={task}
                                    setActiveId={setActiveId}
                                    isClicked={isClicked}
                                    toggleHandleTask={toggleHandleTask}
                                    handleDeleteTask={handleDeleteTask}
                                />
                            </div>
                            <Title
                                text={task.title}
                                isCompleted={task.isCompleted}
                            />
                            <div className="flex items-start gap-x-5 text-sm text-black/70 *:flex *:items-start *:gap-x-1.5 [&_svg]:w-3 [&_i]:h-5 [&_i]:grid [&_i]:place-items-center">
                                <DateTime
                                    date={task.date}
                                    time={task.time}
                                    isPastDate={isPastDate}
                                    isCompleted={task.isCompleted}
                                />
                                <Folder folder={task.folder} />
                            </div>
                        </TaskContainer>
                    );
                })
            ) : (
                <p className="text-lg text-black/70">{`No ${type} tasks`}</p>
            )}
        </ul>
    );
}

export default TasksMap;

// Import custom hook
import usePageTitle from "../../hooks/usePageTitle";

function Tasks({ className }) {
    usePageTitle("Tasks | TaskChecker");

    return (
        <main className={className}>
            <h2>Tasks</h2>
        </main>
    );
}

export default Tasks;

// Import custom hook
import usePageTitle from "../../hooks/usePageTitle";

function Reminders({ className }) {
    usePageTitle("Reminders | TaskChecker");

    return (
        <main className={className}>
            <h2>Reminders</h2>
        </main>
    );
}

export default Reminders;

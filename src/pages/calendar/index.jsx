// Import custom hook
import usePageTitle from "../../hooks/usePageTitle";

function Calendar({ className }) {
    usePageTitle("Calendar | TaskChecker");

    return (
        <main className={className}>
            <h2>Calendar</h2>
        </main>
    );
}

export default Calendar;

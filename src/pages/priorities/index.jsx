// Import custom hook
import usePageTitle from "../../hooks/usePageTitle";

function Priorities({ className }) {
    usePageTitle("Priorities | TaskChecker");

    return (
        <main className={className}>
            <h2>Priorities</h2>
        </main>
    );
}

export default Priorities;

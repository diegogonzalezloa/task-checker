// Import icons
import Alert from "../../assets/icons/Alert";
import Time from "../../assets/icons/Time";

function DateTime({ date, time, isPastDate, isCompleted }) {
    return (
        <div>
            <i>
                {isPastDate && !isCompleted ? (
                    <Alert className="stroke-red-700" />
                ) : (
                    <Time className="fill-black/70" />
                )}
            </i>
            <p
                style={{
                    textDecoration:
                        isPastDate && !isCompleted ? "line-through" : "none",
                }}
            >{`${date} • ${time || "No specify"}`}</p>
        </div>
    );
}

export default DateTime;

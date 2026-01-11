// Import dependencies
import { useState } from "react";
import DatePicker from "react-datepicker";
import { format, startOfDay } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

// import CSS
import "./styles.css";

function InputDate({ type, date, handleChange }) {
    // Single "master" date object
    const [startDate, setStartDate] = useState(null);

    const handleDateChange = (date) => {
        if (!date) return;
        const newDate = startOfDay(date);
        setStartDate(newDate);

        // Create a custom event object
        const e = {
            target: {
                name: "date",
                value: format(newDate, "MMM d, yyyy"),
            },
        };

        handleChange(e);
    };

    return (
        <div className="grid">
            <label>
                Date <span>*</span>
            </label>
            <DatePicker
                selected={startDate}
                value={type === "edit" && format(new Date(date), "dd/MM/yyyy")}
                onChange={handleDateChange}
                dateFormat={"dd/MM/yyyy"}
                placeholderText={"DD/MM/YYYY"}
            />
        </div>
    );
}

export default InputDate;

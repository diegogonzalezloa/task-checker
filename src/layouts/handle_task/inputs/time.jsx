// Import dependencies
import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

// import CSS
import "./styles.css";

function InputTime({ time, handleChange }) {
    // Single "master" date object
    const [startDate, setStartDate] = useState(null);

    const handleTimeChange = (time) => {
        if (!time) return;
        const newHours = time.getHours();
        const newMinutes = time.getMinutes();

        // Take the current state date, and just update the hours/mins
        const newDate = new Date();
        newDate.setHours(newHours);
        newDate.setMinutes(newMinutes);

        setStartDate(newDate);

        // Create a custom event object
        const e = {
            target: {
                name: "time",
                value: format(newDate, "hh:mm a"),
            },
        };

        handleChange(e);
    };

    return (
        <div className="grid">
            <label>Time</label>
            <DatePicker
                selected={startDate}
                value={time}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat={"hh:mm a"}
                placeholderText={"HH:MM A"}
            />
        </div>
    );
}

export default InputTime;

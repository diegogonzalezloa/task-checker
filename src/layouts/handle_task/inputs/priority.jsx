import Select from "../../../components/Select";

function InputPriority({ handleChange, taskPriority }) {
    const optionArr = [
        {
            label: "Low",
            value: "low",
        },
        {
            label: "Medium",
            value: "medium",
        },
        {
            label: "High",
            value: "high",
        },
    ];

    return (
        <div>
            <label>Priority</label>
            <Select
                name="priority"
                value={taskPriority}
                onChange={handleChange}
                optionArr={optionArr}
            />
        </div>
    );
}

export default InputPriority;

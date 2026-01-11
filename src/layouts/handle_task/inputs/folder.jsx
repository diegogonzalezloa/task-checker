import Select from "../../../components/Select";

function InputFolder({ handleChange, taskFolder }) {
    const optionArr = [
        {
            label: "Health",
            value: "Health",
        },
        {
            label: "Personal",
            value: "Personal",
        },
        {
            label: "Work",
            value: "Work",
        },
    ];

    return (
        <div>
            <label>Folder</label>
            <Select
                name="folder"
                value={taskFolder}
                onChange={handleChange}
                optionArr={optionArr}
            />
        </div>
    );
}

export default InputFolder;

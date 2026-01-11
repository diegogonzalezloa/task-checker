function Select({ name, value, onChange, optionArr }) {
    return (
        <div className="relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="appearance-none"
            >
                <option value="" disabled hidden>
                    Select an option...
                </option>
                {optionArr.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className="w-4"
                    fill="none"
                    stroke="black"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </div>
        </div>
    );
}

export default Select;

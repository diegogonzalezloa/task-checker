function Alert({ className }) {
    return (
        <svg
            className={className}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
        >
            <path
                d="m 21,12 c 0,4.9706 -4.0294,9 -9,9 -4.97056,0 -9,-4.0294 -9,-9 0,-4.97056 4.02944,-9 9,-9 4.9706,0 9,4.02944 9,9 z"
                strokeWidth="2.5"
            />
            <path d="m 12,8 v 5" strokeWidth="2.5" strokeLinecap="round" />
            <path
                d="M 12,16 V 15.9888"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default Alert;

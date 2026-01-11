// Import main icon
import Icon from "../assets/icon.svg";

function Title({ className }) {
    return (
        <div className={`flex items-center gap-x-2 ${className}`}>
            <img src={Icon} alt="Icon" className="w-[min(44px,12.57vw)]" />
            <h1 className="text-[min(20px,5.71vw)] font-semibold">
                TaskChecker
            </h1>
        </div>
    );
}

export default Title;

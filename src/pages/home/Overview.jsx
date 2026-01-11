// Import icons
import Calendar from "../../assets/icons/Calendar";
import Flag from "../../assets/icons/Flag";
import Bell from "../../assets/icons/Bell";
import Sync from "../../assets/icons/Sync";

const items = [
    {
        subtitle: "Calendar Integration",
        icon: <Calendar />,
        text: "Seamlessly sync with Google Calendar, Outlook, and Apple Calendar for unified task management",
        color: "linear-gradient(0deg, #25a18e)",
    },
    {
        subtitle: "Smart Prioritization",
        icon: <Flag />,
        text: "Automatically organize tasks by priority levels to focus on what matters most each day",
        color: "linear-gradient(135deg, #ff9e00, #ff9e00, #ff9100, #ff9100)",
    },
    {
        subtitle: "Custom Reminders",
        icon: <Bell />,
        text: "Set personalized reminders with flexible timing options to never miss important deadlines",
        color: "linear-gradient(135deg, #bc00dd, #bc00dd, #e500a4, #e500a4)",
    },
    {
        subtitle: "Cross-Device Sync",
        icon: <Sync />,
        text: "Access your tasks anywhere with real-time synchronization across all your devices",
        color: "linear-gradient(135deg, #0582ca, #00a6fb, #00a6fb)",
    },
];

function Overview() {
    return (
        <section className="px-5 md:px-10 lg:px-15 py-16">
            <div className="max-w-480 mx-auto text-center">
                <h2 className="mb-5">Everything You Need to Stay Organized</h2>
                <p className="mb-16 text-black/70">
                    Powerful features designed to help you manage tasks
                    efficiently and boost your productivity
                </p>
                <ul className="flex justify-center flex-wrap gap-11">
                    {items.map((item, index) => (
                        <li key={index} className="max-w-80">
                            <i
                                style={{
                                    backgroundImage: item.color,
                                }}
                                className={`inline-block p-4 rounded-[14px] *:w-7 mb-3 stroke-white fill-white hover:scale-110 animate-all duration-75 ease-in-out`}
                            >
                                {item.icon}
                            </i>
                            <h3 className="mb-3 text-lg font-semibold">
                                {item.subtitle}
                            </h3>
                            <p className="text-black/70">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Overview;

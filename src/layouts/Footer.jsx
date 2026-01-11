// Import dependency
import { format } from "date-fns";

// Import icon
import Icon from "../assets/icon.svg";

// Items
const items = [
    {
        title: "Products",
        subItems: ["Features", "Pricing", "Integration", "Updates"],
    },
    {
        title: "Company",
        subItems: ["About us", "Careers", "Blog", "Contact"],
    },
    {
        title: "Support",
        subItems: [
            "Help Center",
            "Documentation",
            "API Reference",
            "Community",
        ],
    },
];

const itemsTwo = ["Privacy Policy", "Terms of Service"];

function Footer() {
    return (
        <footer className="px-5 md:px-10 lg:px-15 py-16 bg-[#252525] text-white/60">
            <div className="max-w-480 mx-auto text-sm">
                <div className="grid lg:grid-cols-[max-content_1fr] gap-[max(64px,6.25vw)] mb-16">
                    <div>
                        <div className="flex items-center gap-x-2 mb-4">
                            <img src={Icon} alt="Icon" className="w-11" />
                            <h1 className="text-xl text-white font-semibold">
                                TaskChecker
                            </h1>
                        </div>
                        <p className="lg:max-w-80">
                            Your intelligent task management companion for a
                            more organized and productive life.
                        </p>
                    </div>
                    <div className="grid 2sm:grid-cols-3 gap-y-12">
                        {items.map((item, index) => (
                            <div key={index}>
                                <h3 className="mb-4 text-white font-bold">
                                    {item.title}
                                </h3>
                                <ul className="flex flex-col gap-y-2">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <a
                                                href=""
                                                className="hover:text-white animate-all duration-75"
                                            >
                                                {subItem}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-px mb-5 bg-white/30"></div>
                <div className="flex flex-wrap justify-between gap-y-3 gap-x-20">
                    <p>
                        &copy; {format(new Date(), "yyyy")} TaskChecker. All
                        rights reserved.
                    </p>
                    <ul className="flex flex-wrap justify-center gap-x-6">
                        {itemsTwo.map((item, index) => (
                            <li key={index}>
                                <a
                                    href=""
                                    className="hover:text-white animate-all duration-75"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

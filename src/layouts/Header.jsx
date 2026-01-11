// Import dependencies
import { NavLink } from "react-router-dom";

// Import consts
import navLinks from "../utils/navigation";

// Import component
import Button from "../components/Button";
import Title from "../components/Title";

// Header Component
function Header() {
    return (
        <div className="fixed top-0 left-0 z-99 w-full lg:border-t lg:border-white/50">
            <div className="grid place-items-center h-17 bg-white/97 backdrop-blur-[1.2px]">
                <header className="flex justify-between items-center w-full max-w-480 mx-auto px-5 md:px-16 lg:px-25">
                    <Title />
                    <nav className="hidden lg:flex justify-between w-[48%] max-w-130">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={`${({ isActive }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link"} text-[.9em] hover:text-stormyTeal font-medium`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                    <Button
                        className="px-3 py-2 bg-teal text-[min(1rem,4vw)] text-white hover:bg-stormyTeal"
                        content="Get Stared"
                    />
                </header>
            </div>
        </div>
    );
}

export default Header;

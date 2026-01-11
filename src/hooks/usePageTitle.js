// Import hooks
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePageTitle(title) {
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [location, title]); // Re-runs if location or title changes
}

export default usePageTitle;

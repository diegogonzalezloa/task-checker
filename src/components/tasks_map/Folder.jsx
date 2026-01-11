// Import icon
import FolderIcon from "../../assets/icons/Folder";

function Folder({ folder }) {
    return (
        <div>
            <i>
                <FolderIcon className="stroke-black/70" />
            </i>
            {folder || "none"}
        </div>
    );
}

export default Folder;

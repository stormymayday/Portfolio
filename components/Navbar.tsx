import { FaAlignRight } from "react-icons/fa";
import PageLinks from "@/constants/links";
import Link from "next/link";

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link href="/" className="nav-logo">
                        aidar<span>Dev</span>
                    </Link>
                    <button
                        type="button"
                        className="toggle-btn"
                        onClick={toggleSidebar}
                    >
                        <FaAlignRight />
                    </button>
                </div>
                <PageLinks styleClass="nav-links" />
            </div>
        </nav>
    );
};

export default Navbar;

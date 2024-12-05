import Image from "next/image";
import logo from "@/public/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "@/constants/links";

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Image src={logo} alt="logo" width={157} height={43} />
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

"use client";

import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const data = [
    {
        id: 2,
        icon: <FaLinkedin className="social-icon" />,
        url: "https://www.linkedin.com/in/yourusername",
    },
    {
        id: 6,
        icon: <FaGithubSquare className="social-icon" />,
        url: "https://github.com/stormymayday",
    },
];

interface SocialLinksProps {
    styleClass?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass || ""}`}>
            {data.map((link) => (
                <li key={link.id}>
                    <Link
                        href={link.url}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialLinks;

import React from "react";

import Link from "next/link";

// Array of objects containing links in the Navbar and Sidebar
const data = [
    {
        id: 1,
        text: "home",
        url: "/",
    },
    {
        id: 2,
        text: "about",
        url: "/about/",
    },
    {
        id: 3,
        text: "projects",
        url: "/projects/",
    },
    // {
    // 	id: 4,
    // 	text: 'resume',
    // 	url: '/resume/'
    // },
    {
        id: 5,
        text: "contact",
        url: "/contact/",
    },
];

interface LinksProps {
    styleClass?: string;
}

// Exporting the component adding a specific css class for the Navbar and the Sidebar
const Links: React.FC<LinksProps> = ({ styleClass }) => {
    return (
        <ul className={`page-links ${styleClass || ""}`}>
            {data.map((link) => (
                <li key={link.id}>
                    <Link href={link.url}>{link.text}</Link>
                </li>
            ))}
        </ul>
    );
};
export default Links;

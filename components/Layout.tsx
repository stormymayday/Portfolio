"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;

"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import styles from "./page.module.css";

const Homeheader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);


    // Function to close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    return (
        <>
            <header className={`text-gray-600 body-font ${styles.headerMainWrapper}`}>
                <div className="mx-auto flex p-5 flex-row justify-between items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-[#ff5c00] mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Vatoto</span>
                    </Link>
                    <div className={styles.headerMenuContainer}>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                            <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                            <Link href="#whychooseus" className="mr-5 hover:text-gray-900">Why Choose us</Link>
                            <Link href="#howitworks" className="mr-5 hover:text-gray-900">How It Works</Link>
                            <Link href="#successstory" className="mr-5 hover:text-gray-900">Success Stories</Link>
                            <Link href="#faq" className="mr-5 hover:text-gray-900">Faq</Link>
                        </nav>
                        <Link href="/auth/login" className="bg-[#ff5c00] text-white px-4 py-2 rounded-md mr-5">Become Educator</Link>
                    </div>
                    <div className={styles.headerMenuBarButton}>
                        <button type="button" onClick={() => setIsOpen(!isOpen)}>
                            <Menu color="#000" size={30} />
                        </button>
                    </div>
                </div>
            </header>
            {
                isOpen && (
                    <>
                        <aside  ref={sidebarRef} className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden z-50`}>
                            <div className="flex flex-col h-full p-5">
                                <Link href="/" className="text-xl font-bold text-gray-900 mb-6">
                                    Vatoto.live
                                </Link>
                                <nav className="flex flex-col gap-4 text-gray-700">
                                    <Link href="/" className="hover:text-gray-900">Home</Link>
                                    <Link href="#whychooseus" className="hover:text-gray-900">Why Choose Us</Link>
                                    <Link href="#howitworks" className="hover:text-gray-900">How It Works</Link>
                                    <Link href="#successstory" className="hover:text-gray-900">Success Stories</Link>
                                    <Link href="#faq" className="hover:text-gray-900">FAQ</Link>
                                </nav>
                                <Link href="/auth/login" className="mt-auto bg-[#ff5c00] text-white text-center px-4 py-2 rounded-md">Become Educator</Link>
                            </div>
                        </aside>
                    </>
                )
            }

        </>

    )
}
//
export default Homeheader;

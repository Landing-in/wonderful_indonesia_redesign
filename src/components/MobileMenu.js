"use client";
import {menuLink} from "@/components/Navbar";
import {FaAlignJustify, FaTimes} from "react-icons/fa";
import Logo from "@/components/Logo";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative p-4">
            <div className="flex justify-between items-center">
                <Logo/>
                <button onClick={handleMenuToggle}
                        className="focus:outline-none ml-3">
                    <FaAlignJustify size={30}/>
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, x: "100%"}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: "100%"}}
                        transition={{duration: 0.5}}
                        className="fixed inset-0 bg-primary flex flex-col justify-center items-center z-50"
                    >
                        <div className="justify-between items-center">
                            <button onClick={handleMenuToggle}
                                    className="absolute top-12 right-4 text-white focus:outline-none mr-10">
                                <FaTimes size={30}/>
                            </button>
                        </div>
                        <div className="flex flex-col items-center mb-8">
                            <ul className="flex flex-col space-y-6 text-2xl text-white">
                                {menuLink.map((menu, index) => (
                                    <li key={index} className="hover:underline">
                                        <a href={menu.link}
                                           onClick={handleMenuToggle}>
                                            {menu.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="absolute top-4 right-1/3">
                            <Logo/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

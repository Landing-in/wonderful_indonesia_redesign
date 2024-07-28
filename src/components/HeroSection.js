"use client"
import Image from "next/image";
import HeroImage from "../../public/assets/bromo3.jpg";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import MobileMenu from "@/components/MobileMenu";

export default function HeroSection() {
    return (
        <div className="relative h-screen md:h-[1153.48px]">
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src={HeroImage}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                    className="z-0"
                />
            </motion.div>
            <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-primary/20 from-1%" />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 overflow-hidden md:max-w-[1440px] mx-auto h-full"
            >
                <Navbar />
                {/*<MobileMenu/>*/}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex-grow flex flex-col text-white font-semibold  md:pt-36 px-4 md:px-0 text-center md:text-left mt-36 md:mt-0"
                >
                    <h3 className="text-4xl md:text-7xl">Welcome to</h3>
                    <h1 className="text-5xl md:text-9xl">Wonderful</h1>
                    <h1 className="text-5xl md:text-9xl">Indonesia</h1>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="cursor-pointer text-sm md:text-2xl px-8 md:px-10 py-2 md:py-3 my-4 rounded-full bg-primary/90 duration-300 transition-all ease-in-out  hover:bg-primary shadow-md shadow-primary self-center md:self-start"
                    >
                        Explore Now
                    </motion.button>
                </motion.div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary " />
        </div>
    );
}

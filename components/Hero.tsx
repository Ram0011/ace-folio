"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { FaPaperPlane } from "react-icons/fa";
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
    if (typeof window === "undefined") {
        return null; // Prevent rendering on the server
    }
    return (
        <div className="w-full" id="home">
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 pb-4 pt-6">
                        Hello World! Myself
                    </div>
                    <div className="text-4xl md:text-7xl font-bold dark:text-white text-center pt-14 pb-8">
                        Ramprakash Ramtekkar
                    </div>
                    <div className="flex items-center justify-center font-extralight text-base md:text-2xl dark:text-neutral-200 sm:pt-3 pb-28 max-w-[60%]">
                        I am a Full Stack Developer, with experience in
                        React.js, Node.js, and MongoDB, along with
                        cross-platform app development using React Native.
                    </div>
                    <Link
                        className="flex items-center justify-center gap-3 bg-white rounded-full w-fit text-black px-4 py-2 hover:bg-zinc-200"
                        href={"https://ramprakash-resume.tiiny.site/"}
                        target="_blank"
                    >
                        My resume <FaPaperPlane />
                    </Link>
                </motion.div>
            </AuroraBackground>
        </div>
    );
};

export default Hero;

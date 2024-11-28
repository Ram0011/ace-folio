/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
    return (
        <div
            className="flex flex-col items-center w-full pt-20 relative mb-16"
            id="#contact "
        >
            {/* Your other footer content */}
            <div className="absolute left-0 -bottom-72 min-h-96 w-full z-0">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-70 object-cover"
                />
            </div>
            <div className="flex flex-col items-center relative z-10">
                <h1 className="heading lg:max-w-[45vw]">
                    Want to <span className="text-purple">Build</span> out a
                    project together?{" "}
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center ">
                    Reach out to me and let&apos;s discuss a project!
                </p>
                <a href="mailto:ramprakashramtekkar@gmail.com">
                    <MagicButton
                        title="Let's Get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            {/* Container covering the footer */}
            <div className=" left-0 bottom-0 w-full z-20 flex justify-center">
                <div className="flex gap-10 mt-10">
                    {socialMedia.map((social) => (
                        <a
                            href={social.link}
                            key={social.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple cursor-pointer"
                        >
                            <Image
                                src={social.img}
                                alt={social.link}
                                className="w-10 h-10"
                                width={30}
                                height={30}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;

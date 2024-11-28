"use client";
/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                Selection of{" "}
                <span className="text-purple">Recent Projects</span>
            </h1>
            <div className="flex items-center justify-center pt-5 text-xs text-gray-400 min-w-full sm:px-10 text-center">
                <p>
                    *Project&apos;s backend hosted on Free low bandwidth server
                    loading application may take time upto 50 sec.
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div
                        key={id}
                        className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
                    >
                        <PinContainer title={title} href={link}>
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img src="bg.png" alt="bg.img" />
                                </div>
                                <img
                                    src={img}
                                    alt={title}
                                    className="z-10 absolute bottom-0"
                                />
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2 text-gray-400">
                                {des}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div
                                            key={icon}
                                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center "
                                            style={{
                                                transform: `translateX(-${
                                                    6 * index
                                                }px)`,
                                            }}
                                        >
                                            <img
                                                src={icon}
                                                alt={icon}
                                                className="p-2"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-lg text-sm text-purple text-pretty">
                                        Check out
                                    </p>
                                    <FaLocationArrow
                                        className="ms-3"
                                        color="#CBACF9"
                                    />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
            <div className="flex justify-center p-2">
                <button
                    className="flex items-center justify-center bg-slate-900 border border-gray-400 py-3 px-4 rounded-2xl hover:bg-gray-700 cursor-pointer"
                    onClick={() =>
                        window.open("https://github.com/Ram0011", "_blank")
                    }
                >
                    All Projects
                </button>
            </div>
        </div>
    );
};

export default RecentProjects;

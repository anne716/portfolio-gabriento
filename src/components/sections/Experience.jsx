import { useState, useRef, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import sprite from "../../assets/svg/sprite.svg";
import pythonLogo from "../../assets/svg/python.svg";
import typescriptLogo from "../../assets/svg/typescript.svg";
import tailwindcssLogo from "../../assets/svg/tailwindcss.svg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import apollotechLogo from "../../assets/images/logos/apollotech.png";
import cdocsLogo from "../../assets/images/logos/cdocs.png";

export const Experience = () => {
    const [isFirstExpanded, setIsFirstExpanded] = useState(false);
    const [isSecondExpanded, setIsSecondExpanded] = useState(false);
    const [timelineHeight, setTimelineHeight] = useState('auto');
    
    const firstExperienceRef = useRef(null);
    const secondExperienceRef = useRef(null);
    const timelineContainerRef = useRef(null);
    
    const toggleExpandFirst = () => setIsFirstExpanded(!isFirstExpanded);
    const toggleExpandSecond = () => setIsSecondExpanded(!isSecondExpanded);

    useEffect(() => {
        const updateTimelineHeight = () => {
            if (firstExperienceRef.current && secondExperienceRef.current && timelineContainerRef.current) {
                // Get the bottom position of both experience cards relative to the container
                const firstRect = firstExperienceRef.current.getBoundingClientRect();
                const secondRect = secondExperienceRef.current.getBoundingClientRect();
                const containerRect = timelineContainerRef.current.getBoundingClientRect();
                
                const firstBottom = firstRect.bottom - containerRect.top;
                const secondBottom = secondRect.bottom - containerRect.top;
                
                const newHeight = Math.max(firstBottom, secondBottom) - 33;
                setTimelineHeight(`${newHeight}px`);
            }
        };

        updateTimelineHeight();

        // Add resize observer to handle window resizing
        const resizeObserver = new ResizeObserver(updateTimelineHeight);
        if (timelineContainerRef.current) {
            resizeObserver.observe(timelineContainerRef.current);
        }
        if (firstExperienceRef.current) {
            resizeObserver.observe(firstExperienceRef.current);
        }
        if (secondExperienceRef.current) {
            resizeObserver.observe(secondExperienceRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [isFirstExpanded, isSecondExpanded]);

    return (
        <section
            id="experience"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Experiences
                </h2>

                <div 
                    ref={timelineContainerRef}
                    className="max-w-5xl mx-auto rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition relative"
                >
                    {/* Vertical Timeline Line - dynamic height */}
                    <div 
                        className="border-l border-gray-200 dark:border-gray-700 absolute left-1/2 top-8 transform -translate-x-1/2"
                        style={{ height: timelineHeight }}
                    ></div>
                    
                    <ol className="space-y-12">
                        <li className="relative w-1/2 pr-8 left-side" ref={firstExperienceRef}>
                            <div className="absolute top-0 right-0 transform translate-x-1/2">
                                <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                            </div>
                            {/* Company Logo */}
                            <div className="absolute top-0 right-0 transform translate-x-[130%] w-40 h-40 flex items-start">
                                <img
                                    src={apollotechLogo}
                                    alt="ApolloTech Logo"
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">
                                    Software Developer
                                </h3>
                                <h4 className="text-sm text-gray-400">
                                    Apollo Technologies Inc.
                                </h4>
                                <time className="block text-xs text-gray-500 mb-3">
                                    August 2024 - May 2025
                                </time>
                                <p className="text-gray-300 mb-4">
                                    As a Software Developer, I had the opportunity to work on various projects - from building applications to assisting cross-functional teams with
                                    deployment and bug fixes - to meet client needs and transform their concepts into tangible results.
                                </p>

                                {!isFirstExpanded && (
                                    <button
                                        onClick={toggleExpandFirst}
                                        className="cursor-pointer flex justify-center items-center gap-1 bg-blue-500 text-white text-sm py-2 px-4 rounded-full font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                    >
                                        <IoIosArrowDown /> See More
                                    </button>
                                )}

                                {isFirstExpanded && (
                                    <>
                                        <p className="font-bold mb-2">
                                            Activities
                                        </p>
                                        <ul className="list-disc list-inside text-gray-300 mb-4 ps-1">
                                            <li>Designed and developed VueJS projects with API integrations.</li>
                                            <li>Developed and maintained Spring Boot and Flask Backend projects.</li>
                                            <li>Developed a web server with integration of WiFiDog and Radiator AAA for public captive portal solutions.</li>
                                        </ul>

                                        <p className="font-bold mb-2">
                                            Technologies
                                        </p>
                                        <div className="grid grid-cols-3 md:grid-cols-5 gap-1 space-y-2 mb-6">
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#vue`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">Vue</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#quasar`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">Quasar</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#springboot`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">Spring Boot</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={35} height={35} className="text-white fill-current">
                                                    <use xlinkHref={`${sprite}#flask`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">Flask</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#html`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">HTML</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#css`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">CSS</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#javascript`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">JavaScript</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <img src={typescriptLogo} alt="TypeScript Logo" width={20} height={20} />
                                                <span className="text-[11px] text-gray-300">TypeScript</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#java`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">Java</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <img src={pythonLogo} alt="Python Logo" width={20} height={20} />
                                                <span className="text-[11px] text-gray-300">Python</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <img src={tailwindcssLogo} alt="TailwindCSS Logo" width={20} height={20} />
                                                <span className="text-[11px] text-gray-300">TailwindCSS</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={toggleExpandFirst}
                                            className="cursor-pointer flex justify-center items-center gap-1 bg-blue-500 text-white text-sm py-2 px-4 rounded-full font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                        >
                                            <IoIosArrowUp /> See Less
                                        </button>
                                    </>
                                )}
                            </div>
                        </li>

                        <li className="relative w-1/2 pl-8 text-left right-side ml-auto" ref={secondExperienceRef}>
                            <div className="absolute top-0 left-0 transform -translate-x-1/2">
                                <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                            </div>
                            {/* Company Logo */}
                            <div className="absolute top-0 right-0 transform -translate-x-[395%] md:-translate-x-[530%] w-25 h-25 flex items-start">
                                <img
                                    src={cdocsLogo}
                                    alt="ApolloTech Logo"
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">
                                    Frontend Developer (Internship)
                                </h3>
                                <h4 className="text-sm text-gray-400">
                                    Cagayan de Oro Christian School
                                </h4>
                                <time className="block text-xs text-gray-500 mb-3">
                                    February 2024 - May 2024
                                </time>
                                <p className="text-gray-300 mb-4">
                                    I collaborate on the development of the school management system for the institution and its stakeholders, encompassing front-end, back-end, and API development to enhance user experience and system functionality.
                                </p>

                                {!isSecondExpanded && (
                                    <button
                                        onClick={toggleExpandSecond}
                                        className="cursor-pointer flex justify-center items-center gap-1 bg-blue-500 text-white text-sm py-2 px-4 rounded-full font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                    >
                                        <IoIosArrowDown /> See More
                                    </button>
                                )}

                                {isSecondExpanded && (
                                    <>
                                        <p className="font-bold mb-2">
                                            Activities
                                        </p>
                                        <ul className="list-disc list-inside text-gray-300 mb-4 ps-1">
                                            <li>Developed UI for the School System.</li>
                                            <li>Integrated APIs necessary for the Frontend development.</li>
                                        </ul>

                                        <p className="font-bold mb-2">
                                            Technologies
                                        </p>
                                        <div className="grid grid-cols-3 md:grid-cols-5 gap-1 space-y-2 mb-6">
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#react`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">React</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#django`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">Django</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#html`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">HTML</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#css`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">CSS</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#javascript`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">JavaScript</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <img src={pythonLogo} alt="Python Logo" width={20} height={20} />
                                                <span className="text-[11px] text-gray-300">Python</span>
                                            </div>
                                            <div className="cursor-default flex items-center gap-1 hover:-translate-y-1 transition">
                                                <svg width={20} height={20}>
                                                    <use xlinkHref={`${sprite}#material-ui`} />
                                                </svg>
                                                <span className="text-[11px] text-gray-300">Material UI</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={toggleExpandSecond}
                                            className="cursor-pointer flex justify-center items-center gap-1 bg-blue-500 text-white text-sm py-2 px-4 rounded-full font-semibold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                        >
                                            <IoIosArrowUp /> See Less
                                        </button>
                                    </>
                                )}
                            </div>
                        </li>
                    </ol>
                </div>
            </RevealOnScroll>
        </section>
    );
};
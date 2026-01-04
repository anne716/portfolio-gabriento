import { RevealOnScroll } from "../RevealOnScroll";
import { IoChatbubbleEllipsesOutline, IoDocumentTextOutline } from "react-icons/io5";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    {/* Name */}
                    <p className="xs:w-117 sm:w-117 md:w-117 mb-10 rounded-full p-1 w-[25%] mx-auto text-center bg-[#292929]">
                        Kumusta! 👋 I'm Anna Nicole Gabriento
                    </p>

                    {/* Description */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none mb-10">
                        Experienced <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">full-stack developer </span>with a focus on <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">front-end development</span>.
                    </h1>

                    {/* Additional Details */}
                    <div className="flex justify-center space-x-10 mb-13">
                        {/* Years of Experience */}
                        <div className="flex items-center gap-2">
                            <p className="text-xs bg-[#292929] p-2 rounded-xl">
                                +9
                            </p> 
                            <p className="text-gray-400 text-xs text-left">
                                Months of <br />
                                experience
                            </p>
                        </div>

                        <div className="h-8 w-px bg-gray-600" />

                        {/* Lines of Code Written */}
                        <div className="flex items-center gap-2">
                            <p className="text-xs bg-[#292929] p-2 rounded-xl">
                                5k+
                            </p>
                            <p className="text-gray-400 text-xs text-left">
                                Lines of <br />
                                code written
                            </p>
                        </div>

                        <div className="h-8 w-px bg-gray-600" />

                        {/* Cups of Coffee Consumed */}
                        <div className="flex items-center gap-2">
                            {/* <p className="text-xs bg-[#292929] p-2 rounded-xl">
                                30
                            </p> */}
                            <p className="text-gray-400 text-xs text-left">
                                Countless cups of coffee <br />
                                consumed
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center space-x-4">
                        <a
                            href="/Resume_Gabriento.pdf"
                            download="Resume_Gabriento"
                            className="flex justify-center items-center gap-1 bg-blue-500 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            <IoDocumentTextOutline className="icons" />
                            Resume
                        </a>

                        <a
                            href="#contact"
                            className="flex justify-center items-center gap-1 bg-[#222222] text-white py-3 px-6 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222]"
                        >
                            <IoChatbubbleEllipsesOutline className="icons" />
                            Contact
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
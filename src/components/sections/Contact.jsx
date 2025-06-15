import { RevealOnScroll } from "../RevealOnScroll"
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";
import sprite from "../../assets/svg/sprite.svg";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Contact
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex items-center gap-1">
                                <MdOutlineMail className="w-11 h-11" />
                                <div className="flex-col">
                                    <p className="text-[11px] text-gray-500">
                                        Send me an email
                                    </p>
                                    <p className="text-sm font-semibold">
                                        gabrientoannanicole@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <MdOutlineLocalPhone className="w-11 h-11" />
                                <div className="flex-col">
                                    <p className="text-[11px] text-gray-500">
                                        Give me a call
                                    </p>
                                    <p className="text-sm font-semibold">
                                        +63-936-220-0241
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width={35} height={35} className="ms-1">
                                    <use xlinkHref={`${sprite}#linkedin`} />
                                </svg>
                                <div className="flex-col">
                                    <p className="text-[11px] text-gray-500">
                                        My LinkedIn account
                                    </p>
                                    <p className="text-sm font-semibold">
                                        /in/anna-nicole-gabriento
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width={35} height={35} className="ms-1">
                                    <use xlinkHref={`${sprite}#github2`} />
                                </svg>
                                <div className="flex-col">
                                    <p className="text-[11px] text-gray-500">
                                        My Github account
                                    </p>
                                    <p className="text-sm font-semibold">
                                        /peanut150
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
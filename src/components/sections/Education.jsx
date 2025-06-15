import { RevealOnScroll } from "../RevealOnScroll";
import ustpLogo from "../../assets/images/logos/ustp.png";
import grshsxLogo from "../../assets/images/logos/grshsx.png";

export const Education = () => {
    return (
        <section
            id="education"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Education
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <div className="flex flex-col gap-10">
                            <div className="flex items-center justify-center gap-3">
                                <img
                                    src={ustpLogo}
                                    alt="USTP Logo"
                                    width={85}
                                    height={85}
                                    className="bg-white rounded-xl ms-4"
                                />
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">
                                        Degree:
                                    </p>
                                    <h3 className="font-semibold mb-1 leading-none">
                                        Bachelor of Science in Information Technology
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        2020 - 2024
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        University of Science and Technology of Southern Philippines
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <img
                                    src={grshsxLogo}
                                    alt="GRSHS-X Logo"
                                    width={90}
                                    height={90}
                                    className="rounded-xl"
                                />
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">
                                        Strand:
                                    </p>
                                    <h3 className="font-semibold mb-1 leading-none">
                                        Science, Technology, Engineering, and Mathematics
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        2018 - 2020
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        Gusa Regional Science High School - X
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
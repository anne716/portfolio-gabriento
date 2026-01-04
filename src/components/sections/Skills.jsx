import { RevealOnScroll } from "../RevealOnScroll";
import sprite from "../../assets/svg/sprite.svg";
import pythonLogo from "../../assets/svg/python.svg";
import tailwindcssLogo from "../../assets/svg/tailwindcss.svg";
import typescriptLogo from "../../assets/svg/typescript.svg";
import flowbiteLogo from "../../assets/svg/flowbite.svg";

export const Skills = () => {

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Skills
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <p className="text-gray-300 text-center mb-6">
                            Technologies and tools.
                        </p>

                        <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#html`} />
                                </svg>
                                <span className="text-[11px] text-center">HTML</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#css`} />
                                </svg>
                                <span className="text-[11px] text-center">CSS</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#javascript`} />
                                </svg>
                                <span className="text-[11px] text-center">JavaScript</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <img src={typescriptLogo} alt="TypeScript Logo" width={48} height={48} />
                                <span className="text-[11px] text-center">TypeScript</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#java`} />
                                </svg>
                                <span className="text-[11px] text-center">Java</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#php`} />
                                </svg>
                                <span className="text-[11px] text-center">PHP</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <img src={pythonLogo} alt="Python Logo" width={48} height={48} />
                                <span className="text-[11px] text-center">Python</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#react`} />
                                </svg>
                                <span className="text-[11px] text-center">React</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#vue`} />
                                </svg>
                                <span className="text-[11px] text-center">Vue</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#springboot`} />
                                </svg>
                                <span className="text-[11px] text-center">Spring Boot</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#laravel`} />
                                </svg>
                                <span className="text-[11px] text-center">Laravel</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#flask`} />
                                </svg>
                                <span className="text-[11px] text-center">Flask</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#mysql`} />
                                </svg>
                                <span className="text-[11px] text-center">MySQL</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#postgresql`} />
                                </svg>
                                <span className="text-[11px] text-center">PostgreSQL</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#github`} />
                                </svg>
                                <span className="text-[11px] text-center">Github</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#gitlab`} />
                                </svg>
                                <span className="text-[11px] text-center">Gitlab</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#dbeaver`} />
                                </svg>
                                <span className="text-[11px] text-center">DBeaver</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#material-ui`} />
                                </svg>
                                <span className="text-[11px] text-center">Material UI</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <img src={tailwindcssLogo} alt="TailwindCSS Logo" width={60} height={60} className="mb-3" />
                                <span className="text-[11px] text-center">TailwindCSS</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#bootstrap`} />
                                </svg>
                                <span className="text-[11px] text-center">Bootstrap</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#git`} />
                                </svg>
                                <span className="text-[11px] text-center">Git</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <img src={flowbiteLogo} alt="Flowbite Logo" width={48} height={48} />
                                <span className="text-[11px] text-center">Flowbite</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#cypress`} />
                                </svg>
                                <span className="text-[11px] text-center">Cypress</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-0">
                                    <use xlinkHref={`${sprite}#robot-framework`} />
                                </svg>
                                <span className="text-[11px] text-center">Robot Framework</span>
                            </div>
                            <div className="rounded-lg bg-[#222222] p-2 flex flex-col justify-center items-center w-20 hover:-translate-y-0.5 hover:shadow-[0_0_15px_#222222] transition">
                                <svg width={48} height={48} className="mb-1">
                                    <use xlinkHref={`${sprite}#linux`} />
                                </svg>
                                <span className="text-[11px] text-center">Linux</span>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
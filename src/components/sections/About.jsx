import { RevealOnScroll } from "../RevealOnScroll";
import profilePhoto from "../../assets/images/profile.jpg";

export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <div className="flex items-start gap-10">
                            <img
                                src={profilePhoto}
                                alt="Profile Photo"
                                width={140}
                                height={140}
                                className="rounded-full"
                            />
                            <p className="text-gray-300 mb-6">
                                With over 9 months of experience in the tech industry, I am an experienced full-stack developer
                                with a focus on front-end development. My journey has been marked by collaborations on diverse software
                                projects, allowing me to hone my keen eye for optimization and productivity. I pride myself on my
                                ability to navigate and thrive in dynamic environments, consistently pushing the boundaries of what
                                I can learn and achieve.
                                <br />
                                <br />
                                Looking forward, I am eager to continue contributing to impactful projects and teams. As a Software
                                Developer, I am passionately dedicated to turning innovative ideas into reality. My goal is to leverage
                                my skills in full-stack development, particularly in the front-end, to craft user-friendly and visually appealing
                                experience for users.
                                As I grow in my career, I remain committed to excellence, continuous learning, and the collaborative
                                spirit that has characterized my journey so far.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
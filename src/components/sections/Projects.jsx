import { RevealOnScroll } from "../RevealOnScroll"
import { Modal } from "../Modal"
import { useState } from "react"
import zeepwifi1 from "../../assets/images/zeepwifi/zeepwifi1.png";
import zeepwifi2 from "../../assets/images/zeepwifi/zeepwifi2.png";
import zeepwifi3 from "../../assets/images/zeepwifi/zeepwifi3.png";
import zeepwifi4 from "../../assets/images/zeepwifi/zeepwifi4.png";
import zeepwifi5 from "../../assets/images/zeepwifi/zeepwifi5.png";
import acszeep1 from "../../assets/images/acs-zeep/acszeep1.png";
import acszeep2 from "../../assets/images/acs-zeep/acszeep2.png";
import hiveconnect1 from "../../assets/images/hiveconnect/hiveconnect1.png";
import hiveconnect2 from "../../assets/images/hiveconnect/hiveconnect2.png";
import hiveconnect3 from "../../assets/images/hiveconnect/hiveconnect3.png";
import hiveconnect4 from "../../assets/images/hiveconnect/hiveconnect4.png";
import hiveconnect5 from "../../assets/images/hiveconnect/hiveconnect5.png";
import hiveconnect6 from "../../assets/images/hiveconnect/hiveconnect6.png";
import hiveconnect7 from "../../assets/images/hiveconnect/hiveconnect7.png";
import hiveconnect8 from "../../assets/images/hiveconnect/hiveconnect8.png";
import hiveconnect9 from "../../assets/images/hiveconnect/hiveconnect9.png";
import workconnect1 from "../../assets/images/workconnect/workconnect1.png";
import workconnect2 from "../../assets/images/workconnect/workconnect2.png";
import workconnect3 from "../../assets/images/workconnect/workconnect3.png";
import workconnect4 from "../../assets/images/workconnect/workconnect4.png";
import dost1 from "../../assets/images/dost-attendance-management/dost1.png";
import dost2 from "../../assets/images/dost-attendance-management/dost2.png";
import dost3 from "../../assets/images/dost-attendance-management/dost3.png";
import dost4 from "../../assets/images/dost-attendance-management/dost4.png";
import dost5 from "../../assets/images/dost-attendance-management/dost5.png";
import dost6 from "../../assets/images/dost-attendance-management/dost6.png";
import dost7 from "../../assets/images/dost-attendance-management/dost7.png";
import dost8 from "../../assets/images/dost-attendance-management/dost8.png";
import dost9 from "../../assets/images/dost-attendance-management/dost9.png";

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        {
            id: 1,
            title: "ZeepWiFi",
            description: "Public captive portal solution with WiFiDog protocol and Radiator Radius AAA integration.",
            technologies: ["Flask", "Python", "HTML", "CSS", "JavaScript"],
            images: [zeepwifi1, zeepwifi2, zeepwifi3, zeepwifi4, zeepwifi5],
        },
        {
            id: 2,
            title: "HiveConnect",
            description: "A collection of services that can monitor and provide network services to the consumers.",
            technologies: ["Vue", "Spring Boot", "HTML", "CSS", "JavaScript", "TypeScript", "Java", "TailwindCSS"],
            images: [hiveconnect1, hiveconnect2, hiveconnect3, hiveconnect4, hiveconnect5, hiveconnect6, hiveconnect7, hiveconnect8, hiveconnect9],
        },
        {
            id: 3,
            title: "WorkConnect",
            description: "A collection of services to monitor and manage 7/11 stores.",
            technologies: ["Vue", "Quasar", "Spring Boot", "HTML", "CSS", "TypeScript", "Java"],
            images: [workconnect1, workconnect2, workconnect3, workconnect4],
        },
        {
            id: 4,
            title: "ACS-Zeep",
            description: "A collection of services to monitor/inform ONUs and OLTs, and Zeep network statistics.",
            technologies: ["Vue", "Spring Boot", "HTML", "CSS", "TypeScript", "Java"],
            images: [acszeep1, acszeep2],
        },
        {
            id: 5,
            title: "DOST Attendance Management System",
            description: "A management system for tracking employee attendance and leave credits on a monthly and yearly basis.",
            technologies: ["ReactJS", "Laravel", "HTML", "CSS", "TypeScript", "PHP", "PostgreSQL", "Laragon", "TailwindCSS", "Flowbite"],
            images: [dost1, dost2, dost3, dost4, dost5, dost6, dost7, dost8, dost9],
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section 
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="flex flex-col h-full p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                <h3 className="text-xl font-bold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="cursor-default flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center mt-auto pt-4">
                                    <button
                                        data-modal-target="static-modal"
                                        data-modal-toggle="static-modal"
                                        onClick={() => openModal(project)}
                                        className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>

            {isModalOpen && selectedProject && (
                <Modal project={selectedProject} onClose={closeModal} />
            )}
        </section>
    )
}
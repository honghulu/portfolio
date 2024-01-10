"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 21,
        title: "Song Style Transfer",
        description: "Fall 2021",
        image: "/images/projects/song-style-transfer.png",
        tag: ["All", "ML"],
        gitUrl: "https://github.com/honghulu/Song-Style-Transfer",
        previewUrl: "https://github.com/honghulu/Song-Style-Transfer/blob/main/README.md",
    },
    {
        id: 22.1,
        title: "Penguin's Adventure",
        description: "Summer 2022",
        image: "/images/projects/penguin-adventure.jpg",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/honghulu/Penguin-Adventure",
        previewUrl: "https://private-user-images.githubusercontent.com/135955524/295174415-d5559fff-4872-4815-a560-1318fd295b72.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ4NjY4OTksIm5iZiI6MTcwNDg2NjU5OSwicGF0aCI6Ii8xMzU5NTU1MjQvMjk1MTc0NDE1LWQ1NTU5ZmZmLTQ4NzItNDgxNS1hNTYwLTEzMThmZDI5NWI3Mi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDExMFQwNjAzMTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zODQxZmIyMmY5MDE4MGE1OTIyM2E4YTc5NDRlYjNhMDk3OTkyYjUxNGVhMDg1NjY5OGE4YmRjNzI4OGNkZDUxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.M1yf1WkvFXPbhn7krKoffUQJfIRrxPLUMQA-BiI_kNw",
    },
    {
        id: 19.3,
        title: "J2ObjC Compiler",
        description: "Fall 2019",
        image: "/images/projects/j2objc-compiler.png",
        tag: ["All", "App"],
        gitUrl: "https://github.com/honghulu/java-objective-c-minicompiler",
        previewUrl: "https://github.com/honghulu/java-objective-c-minicompiler/blob/main/src/AdvancedJavaContinuedTest.java",
    },
    {
        id: 19.2,
        title: "Murder on Train",
        description: "Fall 2019",
        image: "/images/projects/murder-on-train.png",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/honghulu/murder-on-train",
        previewUrl: "https://github.com/honghulu/murder-on-train/blob/main/README.md",
    },
    {
        id: 19.1,
        title: "Tucson Snowman Escape",
        description: "Fall 2019",
        image: "/images/projects/tucson-snowman-escape.png",
        tag: ["All", "Game"],
        gitUrl: "https://github.com/honghulu/tucson-snowman-escape",
        previewUrl: "https://github.com/honghulu/tucson-snowman-escape/blob/main/README.md",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.3 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                    ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
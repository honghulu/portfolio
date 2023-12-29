"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>MS in Computer Science, University of Southern California</li>
                <li>BS in Computer Science, minor in Japanese, University of Arizona</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>HuupAI, Backend Software and Machine Learning Engineer Intern</li>
                <li>Amazon, Software Development Engineer Intern</li>
                <li>College of Pharmacy @ UA, Undergraduate Research Assistant</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    };

    return (
        <section
            id="about"
            className="text-white"
        >
            <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image className="md:mt-16" src={`/images/about-image.png`} width={500} height={500}  alt="about me image"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a recent graduated MSCS student at USC. I have a strong cs background.
                        I have learned the fundamental and well utilized my skills in database,
                        full-stack web development, cloud infrastructure, machine learning, etc.
                        I have experienced at Amazon as an SDE intern. I have made a full-stacked web
                        development project and learned the cutting edged skills in AWS cloud tools,
                        including CI/CD, Lambda API, Databases (Redshift, DynamoDB), etc.
                        And I am always curious and a fast learner.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500}  alt="about me image"/>
                <div>
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
                    <div className="flex flex-row mt-8">
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
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
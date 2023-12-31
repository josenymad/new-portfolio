import React from "react";
import { useLocation } from "react-router-dom";

interface SkillsProps {
  activeSlide: number;
}

const Skills: React.FC<SkillsProps> = ({ activeSlide }) => {
  interface SkillObject {
    name: string;
    icon: string;
    project: number[];
  }
  const skills: SkillObject[] = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      project: [0, 1, 2],
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      project: [3],
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      project: [0, 1, 3],
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      project: [0, 1, 3],
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      project: [0, 1, 3],
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      project: [3],
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      project: [0, 1],
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      project: [0, 1, 2, 3],
    },
    {
      name: "Node",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      project: [0, 1, 2, 3],
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      project: [0, 2],
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      project: [2],
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      project: [0],
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      project: [2],
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      project: [0],
    },
    {
      name: "Jest",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      project: [0, 1, 2, 3],
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      project: [0, 1, 2],
    },
  ];
  const { pathname } = useLocation();

  return (
    <section className="mb-8">
      <h2 className="text-3xl 2xl:text-4xl 3xl:text-5xl text-center mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-2 grid-rows-8 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 place-items-center gap-y-4">
        {skills.map((skill: SkillObject) => {
          const { name, icon, project } = skill;
          let opacity: string = "opacity-100";

          if (
            !project.includes(activeSlide) &&
            pathname === "/software-development"
          ) {
            opacity = "opacity-10";
          }

          return (
            <figure key={name} className={`${opacity} duration-500`}>
              <img
                src={icon}
                alt={`${name} Icon`}
                className="w-24 shadow-2xl bg-stone-200 p-4 rounded-2xl"
              />
              <figcaption className="text-center">{name}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

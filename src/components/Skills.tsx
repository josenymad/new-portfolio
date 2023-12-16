import React from "react";

const Skills = () => {
  interface SkillObject {
    name: string;
    icon: string;
  }
  const skills: SkillObject[] = [
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "HTML",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Tailwind",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Figma",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    },
    {
      name: "Node",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Express",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    },
    {
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Jest",
      icon: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-3xl text-center mb-8">Skills</h2>
      <div className="grid grid-cols-8 grid-rows-2 place-items-center gap-y-4">
        {skills.map((skill: SkillObject) => {
          return (
            <figure key={skill.name}>
              <img
                src={skill.icon}
                alt={`${skill.name} Icon`}
                className="w-[7vw] shadow-2xl bg-stone-200 p-4 rounded-2xl"
              />
              <figcaption className="text-center">{skill.name}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

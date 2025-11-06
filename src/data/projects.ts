import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ibrhm42/portfolio-nextjs",
    url: "https://ibrahimkhalil.dev",
    tags: ["Next.js", "Sass", "Web Development", "Tailwind"],
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "This repository contains the source code for a Weather App built using Next.js and Tailwind.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ibrhm42/weather-app-nextjs",
    url: "https://ibrahimkhalil.dev",
    tags: ["Next.js", "Sass", "Web Development", "Tailwind"],
  },
];
export default projects;

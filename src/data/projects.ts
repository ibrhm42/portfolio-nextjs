import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "This repository contains the source code for a weather app built using Next.js and Tailwind.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ibrhm42/weather-app-nextjs",
    url: "https://weathr-app-nextjs.vercel.app",
    tags: ["Next.js", "Sass", "Web Development", "Tailwind"],
  },
  {
    id: "movies-app",
    title: "Movies App",
    description:
      "This repository contains the source code for a movies app built using Next.js and Tailwind.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ibrhm42/imdb",
    url: "https://ibrhm42.github.io/imdb",
    tags: ["React", "Sass", "Web Development"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ibrhm42/portfolio-nextjs",
    url: "https://ibrahims-portfolio-nextjs.vercel.app",
    tags: ["Next.js", "Sass", "Web Development", "Tailwind"],
  },
  {
    id: "weather-app-react",
    title: "Weather App - React",
    description:
      "This repository contains the source code for a weather app built using Next.js and Sass.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ibrhm42/weather-app",
    url: "https://ibrhm42.github.io/weather-app",
    tags: ["React", "Sass", "Web Development"],
  },
];
export default projects;

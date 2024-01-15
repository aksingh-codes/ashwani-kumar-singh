import { FaGitAlt, FaLinux, FaReact, FaCss3 } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPython,
  SiC,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiReactquery,
  SiTypescript,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const skills = [
  {
    type: "frontend",
    skills: [
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "React Query", icon: SiReactquery },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "CSS", icon: FaCss3 },
      { name: "HTML", icon: AiFillHtml5 },
      // { name: "MaterialUI", icon: SiMaterialui }
    ],
  },

  {
    type: "backend",
    skills: [
      { name: "Node", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "C", icon: SiC },
      // { name: "Java", icon: SiJava },
      { name: "Python", icon: SiPython },
    ],
  },

  {
    type: "tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Github", icon: BsGithub },
      { name: "VSCode", icon: SiVisualstudiocode },
      { name: "Linux", icon: FaLinux },
    ],
  },
];

export default skills;

import { FaGitAlt, FaLinux, FaReact, FaCss3, FaBootstrap } from "react-icons/fa"
import { SiVisualstudiocode, SiPython, SiJava, SiC, SiJavascript, SiRedux, SiJquery, SiMaterialui, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"

const skills = [
    {
        type: "frontend", skills: [
            { name: "HTML", icon: AiFillHtml5 },
            { name: "CSS", icon: FaCss3 },
            { name: "JavaScript", icon: SiJavascript },
            { name: "React", icon: FaReact },
            { name: "Bootstrap", icon: FaBootstrap },
            { name: "Redux", icon: SiRedux },
            { name: "jQuery", icon: SiJquery },
            { name: "MaterialUI", icon: SiMaterialui }]
    },

    {
        type: "backend", skills: [
            { name: "Node", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "C", icon: SiC },
            { name: "Java", icon: SiJava },
            { name: "Python", icon: SiPython }
        ]
    },

    {
        type: "tools", skills: [
            { name: "Git", icon: FaGitAlt },
            { name: "Github", icon: BsGithub },
            { name: "VSCode", icon: SiVisualstudiocode },
            { name: "Linux", icon: FaLinux }
        ]
    }
];

export default skills
import { FaGitAlt, FaLinux, FaReact, FaCss3, FaBootstrap } from "react-icons/fa"
import { SiVisualstudiocode, SiPython, SiJava, SiC, SiJavascript, SiRedux, SiJquery, SiMaterialui, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"

const skills = [
    {
        type: "frontend", skills: [
            { name: "html", icon: AiFillHtml5 },
            { name: "css", icon: FaCss3 },
            { name: "javascript", icon: SiJavascript },
            { name: "react", icon: FaReact },
            { name: "bootstrap", icon: FaBootstrap },
            { name: "redux", icon: SiRedux },
            { name: "jQuery", icon: SiJquery },
            { name: "materialUI", icon: SiMaterialui }]
    },

    {
        type: "backend", skills: [
            { name: "node.js", icon: SiNodedotjs },
            { name: "express", icon: SiExpress },
            { name: "mongoDB", icon: SiMongodb },
            { name: "c", icon: SiC },
            { name: "java", icon: SiJava },
            { name: "python", icon: SiPython }
        ]
    },

    {
        type: "tools", skills: [
            { name: "git", icon: FaGitAlt },
            { name: "github", icon: BsGithub },
            { name: "vscode", icon: SiVisualstudiocode },
            { name: "linux", icon: FaLinux }
        ]
    }
];

export default skills
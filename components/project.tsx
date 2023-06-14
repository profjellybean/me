import SingleProject from "./singleproject";
import { Project } from "./singleproject";

const myProjects: Project[] = [
    {
        title: "Cat-Mouse game",
        description: "A simple game where the player controls a cat and tries to catch multiple mice. The game is written in Vue.",
        link: "",
        imageUrl: "/images/catmouse.png"
    },
    {
        title: "Portfolio website",
        description: "This website is written in Next.js and Tailwind CSS.",
        link: "https://github.com/profjellybean/me",
        imageUrl: "/images/portfolio.png"
    },
    {
        title: "SHIC",
        description: "SHIC is a full stack application written in Java and Angular. It is a grocery management system including a shopping list, a home inventory, a cash management system and recipes. ",
        link: "https://github.com/profjellybean/SHIC",
        imageUrl: "/images/shicMain.png"
    },
    {
        title: "Content profiling",
        description: "A data preservation script written in Python which scans a directory and creates a report of the file types and their sizes.",
        link: "https://github.com/profjellybean/content-profiling",
        imageUrl: "/images/content-profiler.png"
    },
]



export default function Projects() {
    return (
        <div className="w-full">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mt-20">my work</h1>
            </div>
            <div className="min-h-[80%] max-w-[80%] ml-auto mr-auto flex justify-center mt-10 mb-10 flex-wrap">
                {myProjects.map((project) => (
                    <SingleProject key={null} title={project.title} description={project.description} link={project.link} imageUrl={project.imageUrl} />
                ))}
            </div>
        </div>
    );
} 
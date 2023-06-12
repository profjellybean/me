import SingleProject from "./singleproject";
import { Project } from "./singleproject";

const myProjects: Project[] = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        link: "",
        imageUrl: "/images/example.jpg"
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        link: "",
        imageUrl: "/images/example.jpg"
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        link: "",
        imageUrl: "/images/example.jpg"
    },
    {
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        link: "",
        imageUrl: "/images/example.jpg"
    },
]



export default function Projects() {
    return (
        <div className="w-full">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mt-20">my work</h1>
            </div>
            <div className="flex justify-center ml-48 mr-48 mt-20 flex-wrap">
                {myProjects.map((project) => (
                    <SingleProject key={null} title={project.title} description={project.description} link={project.link} imageUrl={project.imageUrl} />
                ))}
            </div>
        </div>
    );
} 
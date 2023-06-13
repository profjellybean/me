import Image from 'next/image'
import { FaGithub, FaLinkedin, FaChevronDown, FaEnvelope } from 'react-icons/fa';

export interface Project {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
}


export default function SingleProject(project: Project) {
    return (
        <div className="min-h-[25%] relative flex flex-col items-center rounded-lg p-4 m-4 basis-1/3 bg-white bg-opacity-5 content-center justify-center">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white basis-1/8">
                <Image
                    className="w-18 h-18 object-cover mb-5 aspect-square opacity-10 hover:opacity-100 transition duration-500 ease-in-out"
                    src={project.imageUrl}
                    alt={project.title}
                    fill={true}
                />
            </a>
            <div className='max-w-xl flex flex-wrap gap-2 content-center justify-center'>
                <div className='mb-1 flex flex-wrap'>
                    <h2 className="text-2xl text-white font-bold mr-10 basis-1/8">{project.title}</h2>



                </div>
                <p className="text-gray-400">{project.description}</p>
            </div>
        </div>
    );
};

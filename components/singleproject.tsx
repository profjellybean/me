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
        <div className="flex flex-col items-center rounded-lg p-4 m-4">
            <Image
                className="w-18 h-18 rounded-full object-cover mr-10 aspect-square"
                src={project.imageUrl}
                alt={project.title}
                width={200}
                height={200}
            />
            <div className='max-w-3xl'>
                <div className='flex items-center mb-1'>
                    <h2 className="text-2xl mr-4 text-white font-bold">{project.title}</h2>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <FaGithub className="text-4xl" />
                    </a>
                </div>
                <p className="text-gray-700">{project.description}</p>
            </div>
        </div>
    );
};

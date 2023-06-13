import Image from "next/image";
import { FaGithub, FaLinkedin, FaChevronDown, FaEnvelope } from 'react-icons/fa';

const education = [
    {
        id: 1,
        date: "2023 - present",
        description: "M.Sc. in Software Engineering & Internet Computing",
        place: "Technical University of Vienna, Austria",
    },
    {
        id: 2,
        date: "2019 - 2023",
        description: "B.Sc. in Software & Information Engineering",
        place: "Technical University of Vienna, Austria",
    },
    {
        id: 3,
        date: "2010 - 2018",
        description: "Secondary school",
        place: "Akademisches Gymnasium, Austria",
    }
];

const experience = [
    {
        id: 1,
        date: "2022 - present",
        title: "Java Developer",
        company: "TU Wien"
    },
    {
        id: 2,
        date: "2021 - 2022",
        title: "Technical Support",
        company: "HCM Advice"
    },
    {
        id: 3,
        date: "2020 - 2021",
        title: "IT Services",
        company: "HELFERLINE"
    },
    {
        id: 4,
        date: "2019 - 2020",
        title: "Event Service",
        company: "Manpower"
    },
    {
        id: 5,
        date: "2018 - 2019",
        title: "Military Service",
        company: "Austria Armed Forces"
    },
];
const skills = [
    { id: 1, skill: "Java" },
    { id: 2, skill: "C" },
    { id: 3, skill: "C++" },
    { id: 4, skill: "Python" },
    { id: 5, skill: "Haskell" },
    { id: 18, skill: "Javascript" },
    { id: 6, skill: "TypeScript" },
    { id: 7, skill: "React" },
    { id: 8, skill: "Next.js" },
    { id: 9, skill: "Vue" },
    { id: 10, skill: "Angular" },
    { id: 11, skill: "Node.js" },
    { id: 12, skill: "Express.js" },
    { id: 13, skill: "SQL" },
    { id: 14, skill: "Redis" },
    { id: 15, skill: "MongoDB" },
    { id: 16, skill: "Git" },
    { id: 17, skill: "Docker" },
];


export default function CV() {
    return (
        <div className="w-full">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mt-20">about me</h1>
            </div>
            <div className="flex gap-10 mt-20 flex-wrap ml-40 mr-20 justify-center items-center">
                <div className="basis-1/4">
                    <div className="flex justify-center items-center">
                        <Image
                            src="/images/pb.jpg"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            className="rounded-full aspect-square justify-center items-center"
                            priority={true}
                        />
                    </div>
                    <div className="mt-8 flex justify-center items-center space-x-8">
                        <a href="https://github.com/profjellybean" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaGithub className="text-4xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/valentin-schnabl-450796217" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedin className="text-4xl" />
                        </a>
                        <a href="mailto:valentin.cello@gmail.com" className="text-gray-400 hover:text-white">
                            <FaEnvelope className="text-4xl" />
                        </a>
                    </div>
                </div >
                <div className="flex flex-wrap gap-10 basis-2/3">
                    <div className="basis-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
                        fermentum aliquam, elit nunc ultricies nunc, eu aliquam diam elit at magna. Sed
                        viverra, nisl eget fermentum aliquam, elit nunc ultricies nunc, eu aliquam diam
                        elit at magna. Sed viverra, nisl eget fermentum aliquam, elit nunc ultricies nunc,
                        eu aliquam diam elit at magna. Sed viverra, nisl eget fermentum aliquam, elit nunc
                    </div>
                    <div className="basis-1/3">
                        <h3 className="font-general-bold text-2xl mb-4 text-ternary-dark dark:text-ternary-light">
                            education
                        </h3>
                        {education.map((el) => (
                            <div className="mb-4 text-ternary-dark dark:text-ternary-light text-base" key={el.id}>
                                {el.date}
                                <p className="description">{el.description}</p>
                                <span className='text-gray-400'> {el.place}</span>
                            </div>
                        ))}
                    </div>
                    <div className="basis-1/3">
                        <h3 className="font-general-bold text-2xl mb-4 text-ternary-dark dark:text-ternary-light">
                            professional experience
                        </h3>
                        {experience.map((el) => (
                            <div className="card" key={el.id}>
                                <div className="mb-4 text-ternary-dark dark:text-ternary-light text-base" key={el.id}>
                                    {el.date} <p>{el.title},<span className='text-gray-400'> {el.company}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="basis-full">
                        <h3 className="font-general-bold text-2xl mb-4 text-ternary-dark dark:text-ternary-light">
                            skills
                        </h3>
                        <div className="flex gap-3 flex-wrap">
                            {skills.map((el) => (
                                <div className="" key={el.id}>
                                    <div className="mb-4 text-ternary-dark dark:text-ternary-light text-base" key={el.id}>
                                        {el.skill}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};
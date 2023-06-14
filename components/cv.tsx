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
    { id: 12, skill: "Spring Boot" },
    { id: 18, skill: "Javascript" },
    { id: 6, skill: "TypeScript" },
    { id: 7, skill: "React" },
    { id: 8, skill: "Next.js" },
    { id: 9, skill: "Vue" },
    { id: 10, skill: "Angular" },
    { id: 11, skill: "Node.js" },
    { id: 13, skill: "SQL" },
    { id: 14, skill: "Redis" },
    { id: 15, skill: "MongoDB" },
    { id: 16, skill: "Git" },
    { id: 17, skill: "Docker" },
];
const bio = [
    {
        description: "I am a 23-year-old software developer based in Vienna. Currently pursuing a master's degree in Software Engineering & Internet Computing at the esteemed Technical University of Vienna, I am constantly expanding my knowledge and honing my skills.",
        description2: "I am actively engaged in both academic studies and professional development as a Java developer at the very same university. In addition to my expertise in software development, I am an enthusiastic musician and an avid climber, seeking inspiration from diverse disciplines to fuel my creativity.",
    }
];


export default function CV() {
    return (
        <div className="w-full">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mt-20">about me</h1>
            </div>
            <div className="flex gap-10 mt-20 flex-wrap justify-center items-center">
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
                <div className="flex flex-wrap gap-10 basis-4/5 md:basis-2/3">
                    <div className="basis-full">
                        <h3 className="text-base mb-4 text-ternary-dark dark:text-ternary-light">
                            {bio[0].description} <br />
                            {bio[0].description2}
                        </h3>
                    </div>
                    <div className="md:basis-1/3">
                        <h3 className="font-general-bold text-2xl mb-4 text-ternary-dark dark:text-ternary-light">
                            education
                        </h3>
                        {education.map((el) => (
                            <div className="mb-4 text-ternary-dark dark:text-ternary-light text-base" key={el.id}>
                                {el.date}
                                <p className="description ml-5">{el.description}</p>
                                <span className='text-gray-400 ml-5'> {el.place}</span>
                            </div>
                        ))}
                    </div>
                    <div className="md:basis-1/3">
                        <h3 className="font-general-bold text-2xl mb-4 text-ternary-dark dark:text-ternary-light">
                            professional experience
                        </h3>
                        {experience.map((el) => (
                            <div className="card" key={el.id}>
                                <div className="mb-4 text-ternary-dark dark:text-ternary-light text-base" key={el.id}>
                                    {el.date}<p className="ml-5">{el.title},<span className='text-gray-400'> {el.company}</span> </p>
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
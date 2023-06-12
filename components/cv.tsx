import Image from "next/image";

const education = [
    {
        id: 1,
        date: "2023 - present",
        description: "M.Sc. in software Engineering & internet computing",
        place: "Technical University of Vienna, Austria",
    },
    {
        id: 2,
        date: "2014 - 2018",
        description: "B.Sc. in software & information engineering",
        place: "Technical University of Vienna, Austria",
    },
    {
        id: 3,
        date: "2010 - 2018",
        description: "secondary school",
        place: "Akademisches Gymnasium, Austria",
    }
];

const experience = [
    {
        id: 1,
        date: "2022 - present",
        title: "java developer",
        company: "TU Wien"
    },
    {
        id: 2,
        date: "2021 - 2022",
        title: "technical support",
        company: "HCM Advice"
    },
    {
        id: 3,
        date: "2020 - 2021",
        title: "IT services",
        company: "HELFERLINE"
    },
    {
        id: 4,
        date: "2019 - 2020",
        title: "event service",
        company: "Manpower"
    },
    {
        id: 5,
        date: "2019 - 2020",
        title: "military service",
        company: "austria armed forces"
    },
];
const skills = [
    { id: 1, skill: "Java" },
    { id: 2, skill: "C" },
    { id: 3, skill: "C++" },
    { id: 4, skill: "Python" },
    { id: 5, skill: "Javascript" },
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
    { id: 18, skill: "Linux" },
    { id: 20, skill: "Windows" },
];


export default function CV() {
    return (
        <div className="w-full">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mt-20">about me</h1>
            </div>
            <div className="flex justify-center  gap-10 mt-40">
                <div>
                    <Image
                        src="/images/example.jpg"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <h3 className="font-general-bold text-2xl mb-4 text-ternary-dark dark:text-ternary-light">
                        Education
                    </h3>
                    {education.map((el) => (
                        <div className="mb-4 text-ternary-dark dark:text-ternary-light text-lg" key={el.id}>
                            {el.date}
                            <h3 className="position">{el.place}</h3>
                            <p className="description">{el.description}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="font-general-bold text-2xl mb-4 text-ternary-dark dark:text-ternary-light">
                        Professional Experience
                    </h3>
                    {experience.map((el) => (
                        <div className="card" key={el.id}>
                            <div className="mb-4 text-ternary-dark dark:text-ternary-light text-lg" key={el.id}>
                                {el.date} <p><span className="font-general-italic">{el.title}</span>, {el.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="font-general-bold text-2xl mb-4 text-ternary-dark dark:text-ternary-light">
                        Skills
                    </h3>
                    <div className="card">
                        {skills.map((el) => (
                            <ul key={el.id}>
                                <li className="mb-4 text-ternary-dark dark:text-ternary-light text-lg" key={el.id}>
                                    {el.skill}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
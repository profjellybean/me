import Image from "next/image";

const education = [
    {
        id: 1,
        date: "2019 - 2021",
        place: "MSc. in Computer Science",
        description: "University of the People, Pasadena, CA, USA",
    },
    {
        id: 2,
        date: "2014 - 2018",
        place: "BSc. in Computer Science",
        description: "University of the People, Pasadena, CA, USA",
    },
];

const experience = [
    {
        id: 1,
        date: "2019 - Present",
        title: "Frontend Developer",
        company: "Freelance",
        location: "Remote",
    },
    {
        id: 2,
        date: "2019 - 2020",
        title: "Frontend Developer",
        company: "Freelance",
        location: "Remote",
    },
    {
        id: 3,
        date: "2019 - 2020",
        title: "Frontend Developer",
        company: "Freelance",
        location: "Remote",
    },
];
const skills = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "CSS" },
    { id: 3, skill: "JavaScript" },
    { id: 4, skill: "React" },
    { id: 5, skill: "Next.js" },
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
                                {el.date} <p><span className="font-general-italic">{el.title}</span>, {el.company}, {el.location}</p>
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
import Head from 'next/head';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Valentin Schnabl,<span className='text-5xl text-gray-400'> B.Sc.</span></h1>
        <p className="text-xl text-gray-400 mt-4">Full Stack Software Developer</p>
        <div className="mt-8 flex justify-center items-center space-x-8">
          <a href="https://github.com/profjellybean" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaGithub className="text-4xl" />
          </a>
          <a href="https://www.linkedin.com/in/valentin-schnabl-450796217" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};


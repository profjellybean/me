import { FaGithub, FaLinkedin, FaChevronDown, FaEnvelope } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-white">Valentin Schnabl<span className='text-5xl text-gray-400'> B.Sc.</span></h1>
        <p className="text-2xl text-gray-400 mt-4">Full Stack Software Developer</p>
        <div className="mt-2 flex justify-center items-center flex-col">
          <div className="mt-4 flex justify-center items-center space-x-8">
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
          <div className="mt-20 ml-0 justify-center items-center">
            <a href="#projects" className="flex items-center text-white hover:text-white flex-col text-2xl font-bold">
              <span>Projects</span>
              <FaChevronDown className="mt-2 text-sm" />
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};


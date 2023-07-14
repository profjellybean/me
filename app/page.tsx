import { FaGithub, FaLinkedin, FaChevronDown, FaChevronUp, FaEnvelope } from 'react-icons/fa';
import Project from '../components/project';
import CV from '@/components/cv';
import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen" id='home'>
        <div className="text-center">
          <h1 className="text-7xl font-bold text-white">Valentin Schnabl<span className='text-6xl text-gray-400'> B.Sc.</span></h1>
          <p className="text-3xl text-gray-400 mt-4">full stack software developer</p>
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
            <div className="flex mt-20 justify-center items-center gap-12">
              <a href="#projects" className="flex items-center text-white hover:text-white flex-col text-2xl font-bold">
                <span>projects</span>
                <FaChevronDown className="mt-2 text-sm" />
              </a>
              <a href="#cv" className="flex items-center text-white hover:text-white flex-col text-2xl font-bold">
                <span>about me</span>
                <FaChevronDown className="mt-2 text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-end items-end mt-10 mr-10 hidden lg:flex md:sticky top-3">
        <div className="flex justify-center flex-col items-center gap-2">
          <a href="#home" className="flex items-center text-white hover:text-white flex-col text-2xl font-bold">
            <FaChevronUp className="mt-2 text-sm" />
            <span>home</span>
          </a>
          <a href="#cv" className="flex items-center text-white hover:text-white flex-col text-2xl font-bold">
            <span>about me</span>
            <FaChevronDown className="mt-2 text-sm" />
          </a>
        </div>
      </div>
      <div className="flex-col justify-end items-end mt-10 mr-10 sm:flex lg:hidden sticky top-3 right-1">
        <div className="flex justify-center flex-col items-end gap-2">
          <a href="#home" className="flex items-center text-white hover:text-white flex-col text-2xl font-bold">
            <FaChevronUp className="mt-2 text-md" />
          </a>
          <a href="#cv" className="flex items-center text-white hover:text-white flex-col text-2xl font-bold">
            <FaChevronDown className="mt-2 text-md" />
          </a>
        </div>
      </div>
      <div className='flex min-h-screen mt-20' id='projects'>
        <Project />
      </div>
      <div className='flex min-h-screen mt-20' id='cv'>
        <CV />
      </div>
    </div>
  );
};


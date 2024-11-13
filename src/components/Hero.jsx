/**
 * @copyright 2024 crishanicole
 * @license Apache-2.0
 */
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaFacebookF, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <section id="home" className="relative h-screen ">

      <div className="flex flex-col items-center justify-center min-h-screen relative text-center">
        <div className="text-center max-w-[720px] px-6 reveal-up">
          <h2 className="sm:text-3xl text-lg font-bold text-purple-500/70 p-3">HELLO, MY NAME IS
          </h2>
          <h1 className="sm:text-5xl text-3xl font-bold text-white">Crisha Nicole Reyes.
          </h1>
          <h2 className="mt-5 mb-11 flex justify-center items-center sm:text-2xl text-2xl p-4 text-gray-200/75 ">
          
          <span className="invisible absolute">
            Exploring New Technologies and Frameworks
          </span>
          
          <span className="absolute ">
            <TypeAnimation
              sequence={[
                'A Computer Science Student',
                2000, 
                'An Aspiring Web Developer', 
                2000, 
                'Exploring New Technologies and Frameworks',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </span>
        </h2>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5 mb-11">
            <a 
              href="/images/Reyes_CV.pdf" 
              download 
              className="px-4 sm:px-5 py-2 rounded-3xl shadow text-white bg-purple-500/50 transition-transform transform hover:scale-105 hover:shadow-sm text-center"
              tabIndex="0"
            >
              Download CV &nbsp;
              <span className="material-symbols-rounded text-lg leading-none align-middle">
                download_2
              </span>
            </a>

            <button 
              className="text-purple-500/70 group px-4 sm:px-6 py-2 rounded-3xl shadow bg-white transition-transform transform hover:scale-105 hover:shadow-sm flex items-center justify-center"
            >
              <Link to="about" smooth={true} duration={500}>
                Know More
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2 sm:ml-3" />
              </span>
            </button>
          </div>

        <div className="flex justify-center pt-5 space-x-6 text-gray-100">
          <a href="https://github.com/crisha4" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer hover:text-gray-200" size={20} />
            </a>
            <a href="https://www.facebook.com/yza.seyer.5" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer hover:text-gray-200" size={20} />
            </a>
            <a href="mailto:bc.crishanicole.reyes@cvsu.edu.ph" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="cursor-pointer hover:text-gray-200" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/crisha-nicole" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer hover:text-gray-200" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

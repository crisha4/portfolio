/**
 * @copyright 2024 crishanicole
 * @license Apache-2.0
 */
import { FaGithub, FaFacebookF, FaEnvelope, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-8 md:grid md:grid-cols-2 md:gap-8 lg:items-start mt-32">

        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col lg:col-span-1 ">
          <h2 className="headline-2 font-bold lg:max-w-[12ch] reveal-up">Contact Me!</h2>
          <p className="text-zinc-50 mt-3 mb-5 max-w-[50ch] lg:max-w-[30ch]">
            Feel free to follow and reach me out on my socials!
          </p>

          <div className="flex items-center pt-5 space-x-6 text-gray-100 reveal-up">
            <a href="https://github.com/crisha4" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer hover:text-gray-200 reveal-up" size={20} />
            </a>
            <a href="https://www.facebook.com/yza.seyer.5" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer hover:text-gray-200 reveal-up" size={20} />
            </a>
            <a href="mailto:bc.crishanicole.reyes@cvsu.edu.ph" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="cursor-pointer hover:text-gray-200 reveal-up" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/crisha-nicole" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer hover:text-gray-200 reveal-up" size={20} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-1 md:grid md:items-center md:grid-cols-1 md:gap-2 mb-12">
          <form 
          action="https://getform.io/f/aroonxjb" 
          method="POST" 
          className="xl:pl-10 2xl:pl-20 ">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                autoComplete="name" 
                required 
                placeholder="Full Name" 
                className="text-field reveal-up" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                autoComplete="email" 
                required 
                placeholder="abcd123@example.com" 
                className="text-field reveal-up" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="label reveal-up">Message</label>
              <textarea 
                name="message" 
                id="message" 
                placeholder="Enter something here..." 
                required 
                className="text-field reveal-up resize-y min-h-32 max-h-80" 
              />
            </div>
            <button 
            type="submit" 
            className="btn btn-primary reveal-up [&]:max-w-full w-full justify-center">
              Submit
              </button>
          </form>
        </div>

      </div>
    </section>
  )
}


export default Contact

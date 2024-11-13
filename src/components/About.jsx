/**
 * @copyright 2024 crishanicole
 * @license Apache-2.0
 */
const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 md:py-24 lg:px-16 max-w-6xl mx-auto reveal-up ">
      <h2 className="headline-2 text-center font-bold text-2xl md:text-3xl mb-5">
        About Me
      </h2>
      
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-8 md:space-y-0">
        
        <div className="w-full md:w-1/3 flex justify-center md:px-5">
          <img 
            src="/images/reyes.png" 
            alt="About me" 
            className="rounded-lg shadow-lg w-2/3 md:w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 text-zinc-50 font-medium text-center md:text-left px-5 md:px-11">
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Hello! I’m <span className="text-purple-500/70 font-bold">Crisha Nicole M. Reyes</span>, a third-year computer science student and
             aspiring web developer with a strong passion for creating engaging, responsive web applications. 
            I have a solid foundation in HTML, CSS, PHP, Bootstrap, SQL, and Java, alongside some experience 
            in frameworks like React and Tailwind CSS.
          </p>
          <p className="text-base md:text-lg leading-relaxed mt-4 text-justify">
          Driven by curiosity and a desire to address real-world challenges, I’m enthusiastic 
          about exploring the world of technology, 
          learning new skills, and expanding my ability 
          to craft creative solutions that make an impact.          </p>
        </div>
        
      </div>
    </section>
  );
}

 
 export default About
 
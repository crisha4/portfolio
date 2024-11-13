/**
 * @copyright 2024 crishanicole
 * @license Apache-2.0
 */

/**
 * components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'OOP Language'
  },
  {

    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/php.svg',
    label: 'PHP',
    desc: 'Backend Scripting'
  },
  {
    imgSrc: '/images/sql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwind.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="flex reveal-up flex-col justify-center items-center min-h-screen py-10">
      <div className="container ">

          <h2 className="headline-2 reveal-up text-center font-bold text-2xl md:text-3xl mb-10">
          Skills Overview
          </h2>

          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
              skillItem.map(({imgSrc, label, desc},key)=>(
                <SkillCard 
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                />
              ))
            }
          </div>
      </div>
    </section>
  )
}

export default Skills

/**
 * @copyright 2024 crishanicole
 * @license Apache-2.0
 */
/**
 * Components
 */
import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'CvSU - Bacoor Website',
    desc: 'A CvSU - Bacoor Website Design.',
    tags: ['HTML', 'CSS'],
    projectLink: 'https://cvsu-bacoor-group4itec.on.drv.tw/www.cvsu-bacoor-group4.com/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'PawPals Haven Adoption System',
    desc: 'A system for managing pet adoptions and reservations.',
    tags: ['JAVA', 'SQL'],
    projectLink: 'https://github.com/crisha4/pawpals-haven-pet-adoption-system'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'CDLX - Company',
    desc: 'An IT Company Website Design.',
    tags: ['HTML', 'CSS', 'BOOTSTRAP'],
    projectLink: 'https://cdlx-group4-it-company.on.drv.tw/www.cdlx.com/'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'LibraEase - Library System',
    desc: 'A simple library system for programmers.',
    tags: ['JAVA'],
    projectLink: 'https://github.com/crisha4/libraease-library-system'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'BSCS Checklist',
    desc: 'A checklist of courses for BSCS students.',
    tags: ['PHP', 'HTML', 'CSS'],
    projectLink: 'https://github.com/crisha4/bscs-checklist'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'BabyBites - POS & Inventory System',
    desc: 'A POS and inventory management system for efficient tracking and sales.',
    tags: ['PHP', 'HTML', 'CSS'],
    projectLink: 'https://github.com/crisha4/babybites-pos-and-inventory-system'
  },
];

const Work = () => {
  return (
    <section 
    id="work" 
    className="flex flex-col justify-center items-center min-h-screen py-10 mb-11">
      <div className="container">
        <h2 className="headline-2 reveal-up text-center font-bold text-2xl md:text-3xl mt-10 mb-5">
          My Projects
        </h2>

        <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc, title, desc, tags, projectLink}, key)=>(
            <ProjectCard 
            key={key}
            imgSrc={imgSrc}
            title={title}
            desc={desc}
            tags={tags}
            projectLink={projectLink}
            classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

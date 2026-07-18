import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_site_link,
  source_code_link,
}) => {
  const projectLink = live_site_link || source_code_link;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        perspective={1000}
        scale={1}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex items-start justify-between p-3 card-img_hover'>
            <span className='flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm'>
              <span className='relative flex h-2.5 w-2.5 items-center justify-center'>
                <span className='absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 blur-[2px]' />
                <span className='relative h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.95)]' />
              </span>
              <span>Live Site</span>
            </span>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>

          <button
            type='button'
            onClick={() => window.open(projectLink, "_blank")}
            className='group relative mt-4 inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] shadow-[0_0_28px_rgba(236,72,153,0.32)] transition-transform duration-200 hover:scale-[1.03]'
            aria-label={`View ${name} live site`}
          >
            <span className='absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee_0%,#ec4899_25%,#f97316_50%,#a855f7_75%,#22d3ee_100%)] animate-[spin_2.8s_linear_infinite]' />
            <span className='absolute inset-[2px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02)_55%,_rgba(10,10,25,0.94)_100%)] backdrop-blur-sm' />
            <span className='relative z-10 rounded-full bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400 px-5 py-2 text-sm font-semibold text-white'>
              View Site
            </span>
          </button>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

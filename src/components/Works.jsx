import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { github, live } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'

const ProjectCard=({index,name,description,tags,image, source_code_link,liveLink})=>{
  return(
    <div >
    <motion.div variants={fadeIn("up","spring ",index*0.5,0.75)}>
      <Tilt  options={{max:45,scale:1,speed:450}} className="bg-tertiary p-5 rounded-2xl w-[360px] ">
        <div className='relative w-full h-[230px]'>
          <img src={image}  alt={name} className='w-full h-full object-cover rounded-2xl' />
        </div>
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-1'>
          {liveLink&&<div onClick={()=>window.open(liveLink,"_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
          <img src={live} alt="live" />
          </div>}
          <div onClick={()=>window.open(source_code_link,"_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            
            <img src={github} alt="github" />
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary  text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
    </div>
  )
}

const Works = () => {
  return (
    <div id='work' className='lg:mx-32 md:mx-10 mx-4 mt-16'>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        My work
      </p>
      <h2 className={styles.sectionHeadText}>
        Projects
      </h2>
    </motion.div>
    <div className='w-full flex'>
    <motion.p variants={fadeIn("","",0.1,1)} className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>
    Following projects showcases my skills and experience through real-world examples of my work. 
    </motion.p>
    </div>
    <div className='mt-10 flex  flex-wrap justify-center  gap-7 '>
      {projects.map((project,index)=>(
        <ProjectCard key={`Project-${index}`} index={index} {...project}/>
          
       
      ))}
    </div>
    </div>
  )
}

export default Works
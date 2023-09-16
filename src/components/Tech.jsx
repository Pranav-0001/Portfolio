import React, { useState } from 'react'

import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'


const Tech = () => {
  

  return (
    <div id='skills' >
    <div  className='lg:mx-32 md:mx-8 mx-4  mt-10'>

    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
      I'm most proficient in
      </p>
      <h2 className={`${styles.sectionHeadText} mb-4`}>
        Skills
      </h2>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center  gap-7  '>
      
      {technologies.map((technology)=>(
         
        <div className='md:w-20 md:h-20 h-14 w-14 ' key={technology.name} > 
        <img src={technology.icon} alt={technology.name} className=' tech-img hover:scale-125 transition delay-50 '/>
       
        </div>
      ))}
    </div>  
    </div>  
    </div>
  )
}
export default Tech
// export default SectionWrap(Tech,"tech")
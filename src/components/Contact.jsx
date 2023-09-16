import React from 'react'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { social } from '../constants'

const Contact = () => {
  return (
    <div id='contact' className=' lg:mx-32 md:mx-10 mx-4 mt-20 h-[88vh]'>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
       
       Social Links
      </p>
      <h2 className={styles.sectionHeadText}>
      Contact 
      </h2>
    </motion.div>
    <div className='w-full flex justify-center gap-4 mt-10'>
      {social.map((obj)=>
        // console.log(obj)
        <img src={obj.image} alt={obj.name} onClick={()=>window.open(obj.link,"_blank")} className='h-16 w-16 hover:-translate-y-3 transition delay-150' />
      )}
    </div>
    <div className='mt-8 w-full flex justify-center gap-4 '>
    <p className='text-secondary font-bold'>I'm here and excited to hear from you. Let's innovate and make the web an extraordinary place</p>
    </div>
    </div>
  )
}

export default Contact
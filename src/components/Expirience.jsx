import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
        <img src={experience.icon} className="" alt={experience.company_name} />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}} >{experience.company_name}</p>
      <ul className="mt-5 list-disc ml-5 space-y-2">

        {experience.points.map((point,index)=>(
            <li className="text-white-100 pl-1 text-[14px] tracking-wider" key={index}>
                {point}
            </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

export default function Expirience() {
  return (
    <div className="lg:mx-32 md:mx-10 mx-4 mt-16">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experince</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

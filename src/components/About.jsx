import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { basicDetails } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { me2 } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
    <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </div>
);

const About = () => {
  const firstLineDetails = basicDetails.slice(0, 3);
  const secondLineDetails = basicDetails.slice(3); 

  return (
    <>
      <motion.div variants={textVariant()} className="flex items-center">

      <div className="mr-8">
          <img src={me2} alt="My Picture" className="w-40 h-40 rounded-full object-cover" />
      </div>

      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       A persevering, motivated, and energized software Engineer who has 2+ years of industry level working experience 
       with front end and back end development, Rest-API development and
      works with others to achieve a certain goal well timed and outstanding, accustomed to doing the
      task with responsibility in challenging, fast-paced conditions, 
      especially when managing several tasks, projects, and priorities at the same time!
      </motion.p>

      <div className="flex flex-wrap justify-start items-center gap-5 mt-6">
        {firstLineDetails.map((contact, index) => (
          <div key={index} className="flex items-center gap-2 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition duration-300">
            <img src={contact.icon} alt={contact.type} className="w-8 h-8" />
            <p className="text-white text-xl">{contact.info}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-start items-center gap-5 mt-4">
        {secondLineDetails.map((contact, index) => (
          // <div 
          //   key={index} 
          //   className="flex items-center gap-2 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition duration-300"
          // >
          <a
            key={index}
            href={contact.url} // Ensure contact.url contains the correct link
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security: prevents the new page from accessing window.opener
            className="flex items-center gap-2 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition duration-300"
          >
            <img src={contact.icon} alt={contact.type} className="w-8 h-8" />
            <p className="text-white text-lg">{contact.info}</p>
          </a>
          // </div> 
        ))}
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.43 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="Why choose Samsong vs other Smart Device " textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 3, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Flexible</span> 
        |
        {' '}
        <span className="font-extrabold text-white">
        Up-To-Date
        </span>
        {' '}
        |
        {' '}
        <span className="font-extrabold text-white">
        Resource Control
        </span> 
        |
        {' '}
        <span className="font-extrabold text-white">
        Security
        </span> 
        
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.1, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
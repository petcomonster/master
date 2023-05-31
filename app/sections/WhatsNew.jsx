'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
<div class="chat chat-start">
  <div class="chat-bubble chat-bubble-primary">😎</div>
</div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[1] flex justify-center flex-col"
      >
        <TypingText title="Hi I'm Peter." />
        <TitleText title={"Analyst and I.T"} />
        <div className="mt-[48px] lg:flex flex-wrap mx-auto gap-8">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/pxfuel.jpg"
          alt="get-started"
          className="w-[100%] h-[90%] object-contain"
        />
      </motion.div>
      <div className="chat chat-start">
    <div className="chat-bubble">Self<br/>Motivator</div>
    <div className="chat-bubble">Hey<br/>It's me!</div>
    <div className="chat-bubble">Wiggly<br/>Like a worm</div>
      </div>
    </motion.div>
  </section>
);

export default WhatsNew;
'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="The future of data" textStyles="text-center" />
      <TitleText
        title={(
          <>Understanding of Cloud Computing and Networking
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[700px]"
      >
<div class="mockup-phone border-primary">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-2">
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.pinimg.com/originals/3c/43/fc/3c43fc327eecdc0c4c606786df0fdbaa.gif" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Music Visualizer</h2>
    <p>Upload a song and see it in action</p>
    <div className="card-actions">
      <button className="btn btn-primary">Enter here</button>
    </div>
  </div>
</div>
    </div>
    
  </div>
  
</div>

      </motion.div>
      <div class="mockup-code">
  <pre data-prefix="#"><code>What are you waiting for?</code></pre> 
  <pre data-prefix="$"><code>sudo adduser Peter Smith</code></pre> 
  <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
  <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
  <pre data-prefix=">" class="text-success"><code>$$$$$ Profit!</code></pre>
</div>
    </motion.div>
  </section>
);

export default World;
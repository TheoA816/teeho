import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Contact.module.scss';
import { motion } from "framer-motion";
import questionBlock from './../photos/questionBlock.png';
import TextContact from './TextContact';
import IconContact from './IconContact';

const Contact = () => {

  const bigDevice = useMediaQuery({
    query: '(min-width: 888px)'
  })

  const [show, setShow] = useState(false);

  function showContact () {
    setShow(!show);
  }

  const openVariants = {
		open: {
      transition: { staggerChildren: 0.3, staggerDirection: 1 }
    },
		close: {
      transition: { staggerChildren: 0.3, staggerDirection: -1 } 
    }
	}

  const shakeVariants = {
    open: {},
    close: {
      rotate: [0, 10, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0],
      transition: { duration: 0.5, repeat: Infinity, repeatDelay: 3 }
    }
  }

  return (
    <motion.div className={bigDevice ? styles.bigContainer : styles.smallContainer} id='contact'
      animate={ show ? "open" : "close" }
      variants={openVariants}
      initial={false}
    >
      <motion.img onClick={showContact} id='block' src={questionBlock} className={styles.block}
        animate={ show ? "open" : "close" }
        variants={shakeVariants}
      />

      {/* BIG DEVICE */}
      { bigDevice && <>
        <div className={styles.textContainer}>
          <TextContact content="theo.ang816@gmail.com" show={show}/>
          <TextContact content="theo_fabian.ang@student.unsw.edu.au" show={show}/>
        </div>
        <IconContact icon={<a href='https://github.com/TheoA816'><FaGithub size={50}/></a>} show={show}/>
        <IconContact icon={<a href='https://www.linkedin.com/in/theo-ang-069438205/'><FaLinkedin size={50}/></a>} show={show}/>
      </> }

      {/* SMALL DEVICE */}
      { !bigDevice && <>
        <TextContact content="theo.ang816@gmail.com" show={show}/>
        <TextContact content="theo_fabian.ang@student.unsw.edu.au" show={show}/>
        <div className={styles.socialContainer}>
          <IconContact icon={<a href='https://github.com/TheoA816'><FaGithub size={50}/></a>} show={show}/>
          <IconContact icon={<a href='https://www.linkedin.com/in/theo-ang-069438205/'><FaLinkedin size={50}/></a>} show={show}/>
        </div>
      </> }
    </motion.div>
  )
}

export default Contact
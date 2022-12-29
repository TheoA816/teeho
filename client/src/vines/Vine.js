import { FaBars } from "react-icons/fa";
import styles from './Vine.module.scss';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import VineButton from "./VineButton";

const Vine = () => {

  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(!show);
  }

  const framerVariants = {
    open: { y: '160px' },
    close: { y: '-160px' }
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <FaBars size={50} onClick={onClick}/>
      </div>
      <motion.div className={styles.buttons}
        animate={ show ? "open" : "close" }
        variants={framerVariants}
        transition={{ type: 'tween', duration: 0.8 }}
        initial={ false }
      >
        <VineButton section="Home"/>
        <VineButton section="About"/>
        <VineButton section="Contact"/>
      </motion.div>
    </div>
  )
}

export default Vine
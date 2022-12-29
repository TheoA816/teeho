import { motion } from "framer-motion";
import styles from './VineButton.module.scss';

const VineButton = ({ section }) => {

  const scrollTo = () => {
    document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.button className={styles.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollTo}
    >
      {section}
    </motion.button>
  )
}

export default VineButton
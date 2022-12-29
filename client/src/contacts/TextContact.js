import { motion } from "framer-motion";
import styles from './Contact.module.scss';

const TextContact = ({ content }) => {

	const framerVariants = {
		open: { 
			scale: [null, 1.2, 1],
			transition: { duration: 1, times: [0, 0.6, 0.75] }
		},
		close: { 
			scale: [null, 1.2, 0],
			transition: { duration: 1, times: [0, 0.6, 0.75] }
		}
	}

  return (
    <motion.div className={styles.box}
			variants={ framerVariants }
    >
      <div className={styles.wrapper}>
        {content}
      </div>
    </motion.div>
  )
}

export default TextContact
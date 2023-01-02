import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'
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

	const bigDevice = useMediaQuery({
		query: '(min-width: 888px)'
	})

  return (
    <motion.div className={bigDevice ? styles.bigBox : styles.smallBox}
			variants={ framerVariants }
    >
      <div className={styles.wrapper}>
        {content}
      </div>
    </motion.div>
  )
}

export default TextContact
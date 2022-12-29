import { motion } from "framer-motion";

const IconContact = ({ icon }) => {

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
    <motion.div
		    variants={ framerVariants }
	>
		{icon}
	</motion.div>
  )
}

export default IconContact
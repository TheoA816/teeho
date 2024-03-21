import Ground from "../ground/Ground";
import styles from "./Home.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.container}>
        <span className={styles.title}>Hi I'm Theo</span>
        <span className={styles.content}>
          While I give this site a spruce up, you can find my latest information
          on my resume <a href="/resume.pdf">here</a>!
        </span>
        <span className={styles.links}>
          <a href="https://www.linkedin.com/in/theo-ang/">
            <FaLinkedin size={50} />
          </a>
          <a href="https://github.com/TheoA816">
            <FaGithub size={50} />
          </a>
        </span>
      </div>
      {/* <Ground /> */}
    </div>
  );
};

export default Home;

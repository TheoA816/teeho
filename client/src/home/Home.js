import Ground from '../ground/Ground';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.wrapper} id='home'>
      <div className={styles.container}>
          <span className={styles.title}>Hi I'm Theo</span>
          <span className={styles.content}>
              I'm a Sydney based university student, currently studying for a BSc in Computer Science at the University of New South Wales.
          </span>
      </div>
      <Ground/>
    </div>
  )
}

export default Home
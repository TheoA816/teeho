import styles from './Portfolio.module.scss';
import Ground from '../ground/Ground';
import Orbd from './../photos/orbd.png';
import Fomo from './../photos/fomo.png';

const Portfolio = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.project}>
          <img src={Fomo} href='https://cse-fomo.onrender.com' className={styles.photo}/>
          <div className={styles.description}>
            <a href='https://cse-fomo.onrender.com' className={styles.heading}>FOMO</a>
            <div className={styles.text}>
              Calendar app to keep track of ongoing society events. Ability to filter by societies or tags, 
              and save your own personalised calendar by making your own account!
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.description}>
            <a href='https://orbd.onrender.com' className={styles.heading}>Orbd</a>
            <div className={styles.text}>
              A ThreeJs based web browser game where the aim is to escape the cage as quickly as possible. 
              Incorporates camera panning and WASD movement. Create your own account to save your stats!
            </div>
          </div>
          <img src={Orbd} href='https://orbd.onrender.com' className={styles.photo}/>
        </div>

      </div>
      <Ground/>
    </>
  )
}

export default Portfolio
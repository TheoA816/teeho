import styles from './About.module.scss';
import theo from './../photos/theo.png';

const Me = () => {
  return (
    // ME
    <div className={styles.box} id={styles.me}>
        <div className={styles.wrapper}>
        <div className={styles.ppcontainer}>
          <img src={theo} className={styles.profpic}></img>
          <span>Theo Fabian Ang</span>
        </div>
        <span className={styles.header}>INFO</span>
        <ul>
            <li>Birthday (2004)</li>
            <li>Nationality (Indonesia)</li>
            <li>Languages: English, Bahasa Indonesia, Chinese</li>
        </ul>
        </div>
    </div>
  )
}

export default Me
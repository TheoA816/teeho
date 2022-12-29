import styles from './About.module.scss';

const Edu = () => {
  return (
    // EDUCATION
    <div className={styles.box} id={styles.edu}>
      <div className={styles.wrapper}>
        <span className={styles.title}>EDUCATION</span>
        <span className={styles.header}>UNSW</span>
        <ul>
          <li>Bachelor of Computer Science (3778)</li>
          <li>Expected Graduation (2024)</li>
          <li>WAM (90)</li>
        </ul>
        <span className={styles.header}>SOCS</span>
        <ul>
          <li>CSESOC Projects Trainee (22T2)</li>
        </ul>
      </div>
    </div>
  )
}

export default Edu
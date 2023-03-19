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
          <li>Expected Graduation (Aug 2024)</li>
          <li>WAM (90)</li>
        </ul>
        <span className={styles.header}>SOCS</span>
        <ul>
          <li>CSESOC Projects</li>
          <ul>
            <li>Trainee (22T2)</li>
            <li>Training Lead (23T1)</li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Edu
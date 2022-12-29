import styles from './About.module.scss';

const Skills = () => {
  return (
    // SKILLS
    <div className={styles.box} id={styles.skills}>
      <div className={styles.wrapper}>
        <span className={styles.title}>SKILLS</span>
        <span className={styles.header}>LANGUAGES</span>
        <span className={styles.list}>Python, JS, Java, C, LaTex</span>
        <span className={styles.header}>STACKS</span>
        <span className={styles.list}>React, ExpressJS, AndroidStudio</span>
        <span className={styles.header}>DB</span>
        <span className={styles.list}>PostgreSQL, MongoDB</span>
      </div>
    </div>
  )
}

export default Skills
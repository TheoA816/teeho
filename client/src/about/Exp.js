import styles from './About.module.scss';

const Exp = () => {
  return (
    // EXPERIENCE
    <div className={styles.box} id={styles.exp}>
      <div className={styles.wrapper}>
        <span className={styles.title}>EXPERIENCE</span>
        <span className={styles.header}>TedX Pasar Baru - Jakarta, Indonesia (2021-2022)</span>
        <ul>
          <li>Set up the <a href='https://tedxpasarbaru.com'>website</a> using wordpress</li>
          <li>Managed and oversaw the online webinar event</li>
          <li>Worked with logistics / production to develop videos for the event</li>
        </ul>
        {/* <p>
          iowcbripwippwrihcwiohoiwbcoibowiboibwoibcobwocbwoucrbwuuocowubcrwouwrucrbuw
        </p> */}
      </div>
    </div>
  )
}

export default Exp
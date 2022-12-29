import { useMediaQuery } from 'react-responsive'
import styles from './About.module.scss';
import Edu from './Edu';
import Me from './Me';
import Exp from './Exp';
import Skills from './Skills';
import Ground from '../ground/Ground';

const About = () => {

  const bigDevice = useMediaQuery({
    query: '(min-width: 888px)'
  })

  return (
    <>
      <div className={styles.container} id='about'>
        {/* BIG SCREEN */}
        { bigDevice && <>
          <div className={styles.row}>
            <Me/>
            <Edu/>
          </div>
          <div className={styles.row}>
            <Skills/>
            <Exp/>
          </div>
        </> }

        {/* SMALL SCREEN */}
        { !bigDevice && <>
          <Me/>
          <Edu/>
          <Skills/>
          <Exp/>
        </> }
      </div>
      <Ground/>
    </>
  )
}

export default About
import React from 'react';
import cloud from './../photos/cloud.png';
import styles from './Cloud.module.scss';

const Cloud = () => {
  return (
    <div className={styles.clouds}>
      <div className={styles.cloud1}>        
        <img src={cloud} className={styles.cloud} />
      </div>  
      <div className={styles.cloud2}>        
        <img src={cloud} className={styles.cloud} />
      </div>
      <div className={styles.cloud3}>        
        <img src={cloud} className={styles.cloud} />
      </div>
      <div className={styles.cloud4}>        
        <img src={cloud} className={styles.cloud} />
      </div>
      <div className={styles.cloud5}>        
        <img src={cloud} className={styles.cloud} />
      </div>
      <div className={styles.cloud6}>        
        <img src={cloud} className={styles.cloud} />
      </div>
    </div>
  )
}

export default Cloud
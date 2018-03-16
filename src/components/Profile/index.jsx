import React from 'react'
import styles from './styles.css'

const Profile = ({
  headshotSrc,
  name,
  title,
  children
}) => (
  <div className={styles.profile}>
    {headshotSrc && <img className={styles.headshot} src={headshotSrc} alt='headshot' />}
    <div className={styles.info}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
        <div className={styles.title}>{title}</div>
      </div>
      {/*<div className={styles.bio}>{children}</div>*/}
    </div>
  </div>
)

export default Profile

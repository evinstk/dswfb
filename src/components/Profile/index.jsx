import React from 'react'
import styles from './styles.css'

const Profile = ({
  headshot,
  name,
  title,
  children
}) => (
  <div className={styles.profile}>
    {headshot}
    <div className={styles.info}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
        <div className={styles.title}>{title}</div>
      </div>
      {children}
      {/*<div className={styles.bio}>{children}</div>*/}
    </div>
  </div>
)

export default Profile

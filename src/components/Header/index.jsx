import React from 'react'
import Banner from '../Banner'
import SiteNav from '../SiteNav'
import styles from './styles.css'

const Header = () => (
  <div className={styles.header}>
    <Banner />
    <SiteNav />
  </div>
)

export default Header

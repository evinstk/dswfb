import React from 'react'
import SiteNavLink from '../SiteNavLink'
import styles from './styles.css'

const SiteNav = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      <li><SiteNavLink to='/home'>Home</SiteNavLink></li>
      <li><SiteNavLink to='/events'>Events</SiteNavLink></li>
      <li><SiteNavLink to='/about'>The Band</SiteNavLink></li>
      <li><SiteNavLink to='/contact'>Contact</SiteNavLink></li>
    </ul>
  </nav>
)

export default SiteNav

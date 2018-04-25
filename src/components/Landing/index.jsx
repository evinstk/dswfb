import React from 'react'
import SiteNavLink from '../SiteNavLink'
import logoSrc from '../../assets/logo-cropped.png'
import styles from './styles.css'

const Landing = () => (
  <section className={styles.landing}>
    <div className={styles.logo}>
      <img className={styles.logoImg} src={logoSrc} alt='band logo' />
      <div>Wholly Funk Band</div>
    </div>
    <nav className={styles.nav}>
      <ul>
        <li><SiteNavLink href='#events'>Events</SiteNavLink></li>
        <li><SiteNavLink href='#band'>The Band</SiteNavLink></li>
        <li><SiteNavLink href='#contact'>Contact</SiteNavLink></li>
      </ul>
    </nav>
  </section>
)

export default Landing

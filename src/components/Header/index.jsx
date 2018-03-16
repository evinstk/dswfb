import React from 'react'
import { Link } from 'react-router-dom'
import BandLogo from '../BandLogo'
import SiteNav from '../SiteNav'
import styles from './styles.css'

const Header = () => (
  <div className={styles.header}>
    <Link className={styles.logoLink} to='/'>
      <BandLogo />
    </Link>
    <SiteNav />
  </div>
)

export default Header

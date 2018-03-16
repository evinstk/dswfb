import React from 'react'
import { Route } from 'react-router-dom'
import BandLogo from '../BandLogo'
import SiteNav from '../SiteNav'
import About from '../About'
import styles from './styles.css'

const Home = () => (
  <div>
    <BandLogo />
  </div>
)

const App = () => (
  <div className={styles.app}>
    <BandLogo />
    <SiteNav />
    <Route path='/home' component={Home} />
    <Route path='/about' component={About} />
  </div>
)

export default App

import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header'
import About from '../About'
import styles from './styles.css'

const App = () => (
  <div className={styles.app}>
    <Header />
    <Route path='/about' component={About} />
  </div>
)

export default App

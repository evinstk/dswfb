import React from 'react'
import Landing from '../Landing'
import About from '../About'
import Contact from '../Contact'
import styles from './styles.css'

const App = () => (
  <div className={styles.app}>
    <main>
      <Landing />
      <div className={styles.content}>
        <About />
        <Contact />
      </div>
    </main>
  </div>
)

export default App

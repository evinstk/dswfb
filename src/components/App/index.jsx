import React from 'react'
import Landing from '../Landing'
import About from '../About'
import styles from './styles.css'

const App = () => (
  <div className={styles.app}>
    <main>
      <Landing />
      <div className={styles.content}>
        <About />
      </div>
    </main>
  </div>
)

export default App

import React from 'react'
import { defaultProps } from 'recompose'
import styles from './styles.css'

const Page = defaultProps({
  background: 'black'
})(({
  id,
  background,
  children
}) => (
  <section id={id} className={styles.page} style={{ background }}>
    {children}
  </section>
))

export default Page

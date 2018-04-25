import React from 'react'
import styles from './styles.css'
import Page from '../Page'
import Title from '../Title'
import Social from '../Social'
import { BOOKING_EMAIL } from '../../constants'

const Contact = () => (
  <Page id='contact' className={styles.contact}>
    <Title>Contact</Title>
    <div className={styles.content}>
        <div>
          <em>Got a gig? Need the funk?</em>
        </div>
        <div className={styles.tag}>
          <strong>We could be the band for you</strong>
        </div>
        <div className={styles.emailUs}>
          Book us at&nbsp;
          <a href={`mailto:${BOOKING_EMAIL}`}>
            {BOOKING_EMAIL}
          </a>
        </div>
    </div>
  </Page>
)

export default Contact

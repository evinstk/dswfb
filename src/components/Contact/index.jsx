import React from 'react'
import styles from './styles.css'
import Page from '../Page'
import Title from '../Title'
import {
  BOOKING_EMAIL,
  SOCIAL_EMAIL
} from '../../constants'

const Contact = () => (
  <Page id='contact' className={styles.contact}>
    <Title>Contact</Title>
    <div className={styles.content}>
      <div className={styles.cell}>
        <div>
          <em>Got a gig? Need the funk?</em>
        </div>
        <div className={styles.tag}>
          <strong>We could be the band for you</strong>
        </div>
        <div>
          Book us at&nbsp;
          <a href={`mailto:${BOOKING_EMAIL}`}>
            {BOOKING_EMAIL}
          </a>
        </div>
      </div>
      <div className={styles.cell}>
        <div>
          <em>Have pictures or videos of us?</em>
        </div>
        <div className={styles.tag}>
          <strong>We want to see them!</strong>
        </div>
        <div>
          Share them at&nbsp;
          <a href={`mailto:${SOCIAL_EMAIL}`}>
            {SOCIAL_EMAIL}
          </a>
        </div>
      </div>
    </div>
  </Page>
)

export default Contact

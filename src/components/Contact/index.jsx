import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styles from './styles.css'
import Page from '../Page'
import Title from '../Title'

const BOOKING_EMAIL = 'booking@drsoulsband.com'
const COLOR = '#ddd'

const Contact = () => (
  <Page id='contact' className={styles.contact}>
    <Title>Contact</Title>
    <div className={styles.content}>
      <div>
        Got a gig? Need the funk? We could be the band for you.
        <br />
        Email us at&nbsp;
        <a href={`mailto:${BOOKING_EMAIL}`}>
          {BOOKING_EMAIL}
        </a>.
      </div>
      <div className={styles.social}>
        <SocialIcon color={COLOR} url={`mailto:${BOOKING_EMAIL}`} />
        <SocialIcon color={COLOR} url='https://www.facebook.com/DrSoulsBand/' />
        <SocialIcon color={COLOR} url='https://www.instagram.com/drsoulsband/' />
      </div>
    </div>
  </Page>
)

export default Contact

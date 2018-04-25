import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styles from './styles.css'
import { BOOKING_EMAIL } from '../../constants'

const COLOR = '#ddd'

const Social = () => (
  <div className={styles.social}>
    <SocialIcon color={COLOR} url={`mailto:${BOOKING_EMAIL}`} />
    <SocialIcon color={COLOR} url='https://www.facebook.com/DrSoulsBand/' />
    <SocialIcon color={COLOR} url='https://www.instagram.com/drsoulsband/' />
  </div>
)

export default Social

import React from 'react'
import styles from './styles.css'
import Profile from '../Profile'
import mugJohn from '../../assets/mug-john.jpeg'
import mugMac from '../../assets/mug-mac.jpeg'
import mugTanner from '../../assets/mug-tanner.png'

const About = () => (
  <div className={styles.about}>
    <Profile
      name='Hicks Woolwine'
      title='Bandleader, Bassist'>
      Hicks is the leader of the band, yo.
    </Profile>
    <Profile
      name='Mac Frith'
      title='Drums'
      headshotSrc={mugMac}>
      His name is Mac. He plays drums. His glasses are not prescription.
    </Profile>
    <Profile
      name='John Bogdal'
      title='Guitar'
      headshotSrc={mugJohn}>
      John Bogdal first started playing guitar when he was sixteen and
      hasn’t stopped since. He lives in Nashville where he works as a
      publicist for a local book publisher.
    </Profile>
    <Profile
      name='Tanner Evins'
      title='Keyboard'
      headshotSrc={mugTanner}>
      Planstan.
    </Profile>
    <Profile
      name='Brendan Dorman'
      title='Trumpet'>
      Sings and such.
    </Profile>
  </div>
)

export default About

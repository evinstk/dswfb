import React from 'react'
import styles from './styles.css'
import Profile from '../Profile'
import mugHicks from '../../assets/mug-hicks.jpg'
import mugMac from '../../assets/mug-mac.jpeg'
import mugJohn from '../../assets/mug-john.jpeg'
import mugTanner from '../../assets/mug-tanner.png'
import mugBrendan from '../../assets/mug-brendan.jpg'

const About = () => (
  <section className={styles.about} id='about'>
    <div className={styles.profiles}>
      <Profile
        name='Hicks Woolwine'
        title='Bandleader, Bassist'
        headshotSrc={mugHicks}>
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
        title='Trumpet'
        headshotSrc={mugBrendan}>
        Sings and such.
      </Profile>
    </div>
  </section>
)

export default About

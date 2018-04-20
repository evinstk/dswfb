import React from 'react'
import styles from './styles.css'
import Profile from '../Profile'
import IconBassGuitar from '../IconBassGuitar'
import IconDrumSet from '../IconDrumSet'
import IconGuitar from '../IconGuitar'
import IconKeyboard from '../IconKeyboard'
import IconTrumpet from '../IconTrumpet'

const ICON_SIZE = '10rem'
const ICON_COLOR = 'white'

const About = () => (
  <section className={styles.about} id='about'>
    <div>
      <Profile
        name='Hicks Woolwine'
        title='Bandleader, Bassist'
        headshot={<IconBassGuitar height={ICON_SIZE} width={ICON_SIZE} fill={ICON_COLOR} />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </Profile>
      <Profile
        name='John Bogdal'
        title='Guitar'
        headshot={<IconGuitar height={ICON_SIZE} width={ICON_SIZE} fill={ICON_COLOR} />}>
        John Bogdal first started playing guitar when he was sixteen and
        hasn’t stopped since. He lives in Nashville where he works as a
        publicist for a local book publisher.
      </Profile>
    </div>
    <div>
      <Profile
        name='Mac Frith'
        title='Drums'
        headshot={<IconDrumSet height={ICON_SIZE} width={ICON_SIZE} fill={ICON_COLOR} />}>
        His name is Mac. He plays drums. His glasses are not
        prescription.
      </Profile>
    </div>
    <div>
      <Profile
        name='Tanner Evins'
        title='Keyboard'
        headshot={<IconKeyboard height={ICON_SIZE} width={ICON_SIZE} fill={ICON_COLOR} />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </Profile>
      <Profile
        name='Brendan Dorman'
        title='Trumpet'
        headshot={<IconTrumpet height={ICON_SIZE} width={ICON_SIZE} fill={ICON_COLOR} />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </Profile>
    </div>
  </section>
)

export default About

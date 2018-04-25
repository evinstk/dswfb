import React from 'react'
import styles from './styles.css'
import Page from '../Page'
import Title from '../Title'
import Profile from '../Profile'
import IconBassGuitar from '../IconBassGuitar'
import IconDrumSet from '../IconDrumSet'
import IconGuitar from '../IconGuitar'
import IconKeyboard from '../IconKeyboard'
import IconTrumpet from '../IconTrumpet'

const ICON_SIZE = '10rem'
const ICON_COLOR = '#ddd'

const Band = () => (
  <Page id='band'>
    <Title>The Band</Title>
    <div className={styles.profiles}>
      <div>
        <Profile
          name='Hicks Woolwine'
          title='Bandleader, Bassist'
          headshot={<IconBassGuitar height={ICON_SIZE} width={ICON_SIZE} fill={ICON_COLOR} />}>
          Hicks got his PhD in Soul Studies from Southern Funk
          Univerity, with concentrations in Bass Groove and Metal
          Shred. He also majored in Math to pay the bills. When he's
          not slapping his bass, he studies for actuary exams and has
          no life.
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
          No one knows how long Mac has been playing drums. All that
          is certain is that he has no friends. A true lone wolf.
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
    </div>
  </Page>
)

export default Band

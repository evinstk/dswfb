import React from 'react'
import logo from '../assets/logo-cropped.png'

const BandLogo = props => (
  <div>
    <img alt='logo' {...props} src={logo} style={{ width: '20rem' }} />
  </div>
)

export default BandLogo

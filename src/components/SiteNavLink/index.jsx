import React from 'react'
import { siteNavLink } from './styles.css'

const SiteNavLink = ({ children, ...restProps }) => (
  <a {...restProps} className={siteNavLink}>{children}</a>
)

export default SiteNavLink

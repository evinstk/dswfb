import { NavLink } from 'react-router-dom'
import { withProps } from 'recompose'
import { siteNavLink, active } from './styles.css'

const SiteNavLink = withProps({
  className: siteNavLink,
  activeClassName: active
})(NavLink)

export default SiteNavLink

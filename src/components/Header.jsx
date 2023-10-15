import {NavLink} from 'react-router-dom'
export default function Header(){
  return <header>
    <div className="logo">APP LOGO</div>
    <nav>
      <NavLink to='/'>Dashboard</NavLink>
      <NavLink to='/create_ad'>Create Ads</NavLink>
    </nav>
  </header>
}
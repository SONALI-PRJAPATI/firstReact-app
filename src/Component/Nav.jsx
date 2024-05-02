
import {  NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='w-[80%] flex-none'>
        <NavLink className={(e) => (e.isActive? "text-red-300" : "")} to="/">Home</NavLink>
        <NavLink className={(e) => (e.isActive? "text-red-300" : "")} to="/create">Book Entry</NavLink>
        <NavLink className={(e) => (e.isActive? "text-red-300" : "")} to="/show">Library</NavLink>
    </nav>
  )
}

export default Nav
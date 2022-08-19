import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <nav>
          {/* <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul> */}
          <ul>
              <li><NavLink to="/"  style={({isActive})=>{return {color: isActive?'red':'blue'}}} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
            <li><NavLink to="/about" style={({isActive})=>{return {color: isActive?'red':'blue'}}} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink></li>
              <li><NavLink to="/contact" style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink></li>
              <li><NavLink to="/post/mobile" style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Post</NavLink></li>
              <li><NavLink to="/post/mobile/1" style={({ isActive }) => { return { color: isActive ? 'red' : 'blue' } }} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Post with id</NavLink></li>
              <li><NavLink to="/asdf" style={({isActive})=>{return {color: isActive?'red':'blue'}}} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Error</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar

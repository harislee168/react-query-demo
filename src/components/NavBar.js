import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/super-heroes'>SuperHeores</NavLink>
      <NavLink to='/rq-super-heroes'>RQ SuperHeroes</NavLink>
      <NavLink to='/button-super-heroes'>Button SuperHeroes</NavLink>
      <NavLink to='/parallel-queries'>Parallel Queries</NavLink>
    </nav>
  )
}

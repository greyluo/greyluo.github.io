import React from 'react'
import {Link} from 'react-router-dom'
import { Collapse } from 'react-bootstrap'

import { Stack } from 'react-bootstrap'

const Sidebar = ({open}) => {
    return (
      <Collapse in={open}  dimension="width">
      <ul className='navbar-nav ms-auto'>
        <li className='nav-item'> 
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/Education' className='nav-link'>Education</Link>
        </li>
        <li className='nav-item'>
          <Link to='/Projects' className='nav-link'>Projects</Link>
        </li>
      </ul>
        
     
      
      </Collapse>
      )
  }
  export default Sidebar;

import React from 'react'
import {Link} from 'react-router-dom'
import { Collapse } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

const Sidebar = ({open}) => {
    return (
      <Collapse in={open}>
      <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Education">Education</Nav.Link>
      <Nav.Link href="Projects">Projects</Nav.Link>
    </Nav>
      </Collapse>
      )
  }
  export default Sidebar;

import React from 'react'

const Sidebar = ( ()=> {
    return (

        <nav className='navbar navbar-expand-sm bg-dark navbar-dark p-3'>
          <div className='container'>
          <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className='nav-item'>
                <a className="nav-link" href="/Education">Education</a>
              </li>
              <li className='nav-item'>
                <a className="nav-link" href="/Projects">Projects</a>

              </li>
              <li className='nav-item'>
                <a className="nav-link" href="/Contacts">Contacts</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>


      )
  }
)
  export default Sidebar;

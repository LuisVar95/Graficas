import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header class="header">
      <div className='header__flex'>
        <div className='header__campo-logo'>
          <img className='header__logo' src='../../img/crm.png' width={70}/>
          <h1 className='header__texto'>DashBoard</h1>
        </div>
        <nav className='header__nav'>
          <Link className='header__link'>Cerrar Sesion</Link>
        </nav>
      </div>
    </header>
    <aside class="sidebar">
      <div className='sidebar__contenedor'>
        <nav className='sidebar__nav'>
          <Link className='sidebar__link'>
            <div className='sidebar__campo'>
              <img className='sidebar__logo' src="../../img/home.png" alt="" width={35}/>
              <p className='sidebar__texto'>Main</p>
            </div>
          </Link>
          <Link className='sidebar__link'>
            <div className='sidebar__campo'>
              <img className='sidebar__logo' src="../../img/grafica.png" alt="" width={35}/>
              <p className='sidebar__texto'>Graphics</p>
            </div>
          </Link>
        </nav>
      </div>
    </aside>
    <main class="main">
        <div class="main__scrollable">
            <Outlet/>
        </div>
    </main>
    </>
  )
}

export default Layout
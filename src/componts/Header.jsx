import React from 'react';
import './Header.css'
import { Outlet, Link , NavLink} from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';

// should be Layout
const Header = () => {
  const entertV = "e.V."
  return (
    <div>
      
    <header className="card" >
    <header>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <NavLink to="/" className="navbar-brand logo" href="#">ArchiV.{<p className='enterV'>{entertV}</p>}</NavLink>
      
            <NavLink to="/logincard" className="nav-link" href="#">Login</NavLink>
          
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            
            <NavLink to="/karteiform" className="nav-link active" aria-current="page" href="#">Kartei</NavLink>
          </li>

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategorien
            </a>
          <ul className="dropdown-menu">
            <NavLink to="/storagetest" className="dropdown-item" href="#">list with storage-test</NavLink>
            <li><a className="dropdown-item" href="#">Ranking</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">another categories</a></li>
          </ul>
        </li>
<li className="nav-item">
  <a className="nav-link disabled" aria-disabled="true">eingeloggt/nicht eingeloggt</a>
</li>
</ul>
<form className="d-flex" role="search">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success" type="submit">Search</button>
</form>

</div>

    </div>

</nav>
</header>
    </header>
    
    <main>
      <Outlet/>
    </main>
    <Footer></Footer>
    </div>
  )
}

export default Header
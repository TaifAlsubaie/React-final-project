import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = ({ cartCount }) => {
  return (
    <div className="pb-20 min-h-screen">
      <header >
        <nav className="navbar navbar-app">
          <div className="container">
            <ul className="list-inline">
              <img src="/log.png" className="logo px2" alt="logo" />
              <li className="list-inline-item a-nav px-2"><Link to="/">Home</Link></li>
              <li className="list-inline-item a-nav px-2"><Link to="/menu">Menu</Link></li>
              <li className="list-inline-item a-nav px-2"><Link to="/offers">Offers</Link></li>
              <li className="list-inline-item a-nav px-2"><Link to="/about">About</Link></li>
            </ul>
          </div>

    
<button className="btn position-relative">
  <Link to="/cart" className="text-dark">
    <i className="bi bi-cart3 fs-4"></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
      {cartCount}
    </span>
  </Link>
</button>
        </nav>
      </header>

      <main className="body">
        <Outlet />
      </main>

     <footer className="footer">
  <p>© 2025 React Bakery. All rights reserved.</p>
  <p>Address: Riyadh, Al Olaya District</p>
  <p>
    Contact us:
    <a href="mailto:contact@reactbakery.com" style={{ color: '#fff', textDecoration: 'underline' }}>
      contact@reactbakery.com
    </a>
  </p>
  <div className="social-icons mt-2">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
      <i className="bi bi-instagram fs-4 text-white"></i>
    </a>
    <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-snapchat fs-4 text-white"></i>
    </a>
  </div>
</footer>

    </div>
  );
};

export default MainLayout;

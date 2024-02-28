import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NavbarComponent: React.FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const closeNavOnResize = () => {
    if (window.innerWidth <= 992 && isNavOpen) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', closeNavOnResize);

    return () => {
      window.removeEventListener('resize', closeNavOnResize);
    };
  }, [isNavOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-yellow-500">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link href="/">
            <span className="navbar-brand text-white text-2xl font-bold">NO-KCAL</span>
          </Link>
        </div>

        {/* Nav Icon for Small Screens */}
        <button
          className="navbar-toggler ml-4"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          {isNavOpen ? (
            <span className="navbar-toggler-icon">&#10005;</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        {/* Large Screen Menu */}
        <div className={`ml-4 ${isNavOpen ? 'd-none d-lg-none' : 'd-none d-lg-block'}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <span className="nav-link text-white text-2xl">HOME</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/users">
                <span className="nav-link text-white text-2xl">USERS</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/metrics">
                <span className="nav-link text-white text-2xl">MÉTRICAS</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/ranking">
                <span className="nav-link text-white text-2xl">RANKING</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay Menu */}
        {isNavOpen && (
          <div className="overlay-menu">
            <button
              className="close-btn"
              onClick={toggleNav}
            >
              &times;
            </button>
            <div className="menu-content">
              <ul>
                <li>
                  <Link href="/" onClick={toggleNav}>
                    <span className="nav-link text-white text-4xl">HOME</span>
                  </Link>
                </li>
                <li>
                  <Link href="/users" onClick={toggleNav}>
                    <span className="nav-link text-white text-4xl">USERS</span>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/metrics" onClick={toggleNav}>
                    <span className="nav-link text-white text-4xl">MÉTRICAS</span>
                  </Link>
                </li> */}
                <li>
                  <Link href="/ranking" onClick={toggleNav}>
                    <span className="nav-link text-white text-4xl">RANKING</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .overlay-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .overlay-menu .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }

        .overlay-menu .menu-content {
          text-align: center;
        }

        .overlay-menu ul {
          list-style: none;
          padding: 0;
        }

        .overlay-menu li {
          margin-bottom: 20px;
        }

        .overlay-menu .nav-link {
          font-size: 2rem;
          color: white;
        }
      `}</style>
    </nav>
  );
};

export default NavbarComponent;

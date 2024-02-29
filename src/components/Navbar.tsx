import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { selectPathname, updatePathname } from '@/redux/reducers/routerReducer';

const NavbarComponent: React.FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const dispatch = useDispatch();
  const pathname = useSelector(selectPathname);

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

  const handleLinkClick = (path: any) => {
    dispatch(updatePathname(path));
    toggleNav();
  };
  console.log('pathname', pathname);


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-amber-500">
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
        <div className={`ml-4 ${isNavOpen ? 'hidden lg:hidden' : 'hidden lg:block'}`} id="navbarNav">
          <ul className="navbar-nav">
            {menuItems.map((menuItem) => (
              <li className="nav-item" key={menuItem.path}>
                <Link href={menuItem.path}>
                  <span className={`nav-link text-2xl text-slate-800 ${pathname === menuItem.path ? 'font-bold text-cyan-500' : ''
                    }`}>
                    {menuItem.label}
                  </span>
                </Link>
              </li>
            ))}
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
                {menuItems.map((menuItem) => (
                  <li key={menuItem.path}>
                    <Link href={menuItem.path} onClick={toggleNav}>
                      <a className={`nav-link text-white text-2xl ${pathname === menuItem.path ? 'font-bold' : ''
                        }`} onClick={() => handleLinkClick(menuItem.path)}>
                        {menuItem.label}
                      </a>
                    </Link>
                  </li>
                ))}
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
        @media (min-width: 992px) {
          .navbar-nav .font-bold {
            // Adicione seus estilos para o item de menu ativo em telas grandes aqui
            color: #ffffff; // Mude para a cor desejada
          }
        }
      `}</style>
    </nav>
  );
};

const menuItems = [
  { path: '/', label: 'HOME' },
  { path: '/users', label: 'USUÁRIOS' },
  { path: '/birthdays', label: 'ANIVERSARIANTES' },
  { path: '/ranking', label: 'RANKING' },
];

export default NavbarComponent;

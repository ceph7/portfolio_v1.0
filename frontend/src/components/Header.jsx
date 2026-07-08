import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="site-brand">
        {/* <span className="brand-mark">ADZ</span> */}
        <div>
          <h1>ADZIMAH Seraph Cephas</h1>
          {/* <p>Développeur Web</p> */}
        </div>
      </div>

      <nav className="site-nav" aria-label="Navigation principale">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          À propos
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Mon Portfolio</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header
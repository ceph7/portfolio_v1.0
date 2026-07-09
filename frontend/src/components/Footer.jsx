function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <h3>Mon Portfolio</h3>
          <p>Développeur web passionné par les solutions modernes et utiles.</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:seraphcephas@gmail.com">seraphcephas@gmail.com</a></li>
            <li><span>Lomé, Togo</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
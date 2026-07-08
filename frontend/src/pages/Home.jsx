function Home() {
    return (
        <section className="home-page">
                <div className="hero-block">
                    <div className="hero-text">
                        <h1>Je construis des solutions web modernes, rapides et sécurisées.</h1>
                        <p>
                        Bonjour, je suis développeur web passionné par la création d’applications
                        performantes, élégantes et accessibles.
                        </p>
                        <div className="hero-actions">
                        <a href="/contact" className="btn btn-primary">Me contacter</a>
                        <a href="/about" className="btn btn-secondary">En savoir plus</a>
                        </div>
                    </div>

            <div className="hero-image">
                <img src="/images/profile.JPG" alt="Photo de profil" />
            </div>
            </div>

            <div className="info-grid">
                <div className="info-card">
                    <h3>Compétences</h3>
                    <ul>
                        <li>React</li>
                        <li>Laravel</li>
                        <li>HTML / CSS / JavaScript</li>
                    </ul>
                </div>

                <div className="info-card">
                    <h3>Objectif</h3>
                    <p>
                        Créer des expériences digitales utiles, modernes et adaptées aux besoins
                        des utilisateurs.
                    </p>
                </div>
            </div>

            <div className="projects-section">
  <h2>Projets réalisés</h2>

  <div className="info-grid">
    <div className="info-card">
      <h3>Portfolio professionnel</h3>
      <p>Un site moderne, responsive et sécurisé avec React et Laravel.</p>
    </div>

    <div className="info-card">
      <h3>Application web sur mesure</h3>
      <p>Une solution personnalisée pour répondre à un besoin précis.</p>
    </div>

    <div className="info-card">
      <h3>Interface utilisateur moderne</h3>
      <p>Une expérience fluide et agréable pour les visiteurs.</p>
    </div>
  </div>
</div>

            <div className="skills-section">
                <h2>Mes compétences</h2>
        
                 <div className="skills-list">
                        <span className="skill-badge">React</span>
                        <span className="skill-badge">Laravel</span>
                        <span className="skill-badge">HTML</span>
                        <span className="skill-badge">CSS</span>
                        <span className="skill-badge">JavaScript</span>
                        <span className="skill-badge">API REST</span>
                </div>
            </div>

            <div className="experience-section">
                <h2>Mon expérience</h2>

                <div className="experience-item">
                    <h3>Stagiaire Ingenieur Data Warehouse </h3>

                    <p>YAS TOGO - Juil 2025 à Août 2025</p>
                    <p>
                        J’ai travaillé sur un script python automatisé conçu pour recuperer les données meteo via une API
                        pour connaitre les conditions meteo sur toute l'étendue du territoire Togolais. Ce script a été intégré dans un projet plus vaste de gestion des données meteo.
                    </p>
                </div>
            </div>

            <div className= "services-section">
                <h2>Mes services</h2>

                <div className="info-grid">
                    <div className="info-card">
                        <h3>Développement web</h3>
                        <p>
                            Création de sites web modernes, performants et adaptés aux besoins des utilisateurs.
                        </p>
                    </div>

                    <div className="info-card">
                        <h3>Maintenance et support</h3>
                        <p>
                            Maintenance de sites web existants, résolution de problèmes et mise à jour des fonctionnalités.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;
function Home() {
    return (
        <section className="home-page">
            <div className="hero-block">
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

                <h2>Mes projets</h2>

                <div className="info-grid">
                    <div className="info-card">
                        <h3>Projet 1</h3>
                        <p>
                            Description du projet 1. C’est un projet web moderne et performant.
                        </p>
                    </div>

                    <div className="info-card">
                        <h3>Projet 2</h3>
                        <p>
                            Description du projet 2. C’est un projet web moderne et performant.
                        </p>
                    </div>

                    <div className="info-card">
                        <h3>Projet 3</h3>
                        <p>
                            Description du projet 3. C’est un projet web moderne et performant.
                        </p>
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
        </section>
    );
}

export default Home;
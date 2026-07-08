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
        </section>
    );
}

export default Home;
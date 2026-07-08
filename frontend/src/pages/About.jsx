function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div>
          <span className="eyebrow">À propos</span>
          <h1>Je crée des expériences web modernes, utiles et convaincantes.</h1>
          <p>
            Je suis un développeur web passionné par la création d’interfaces
            élégantes, performantes et accessibles. Mon objectif est de transformer
            des idées en solutions numériques claires et impactantes.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h3>Qui je suis</h3>
          <p>
            Je m’intéresse au développement web depuis longtemps et j’aime construire
            des projets à la fois esthétiques et fonctionnels. Je travaille avec
            des technologies modernes pour offrir des expériences fluides sur tous
            les supports.
          </p>
        </article>

        <article className="about-card">
          <h3>Ce que j’aime faire</h3>
          <p>
            Concevoir des interfaces modernes, développer des applications web
            fiables et améliorer continuellement l’expérience utilisateur.
          </p>
        </article>
      </div>

      <div className="about-story">
        <h2>Mon parcours</h2>
        <p>
          Au fil de mes expériences, j’ai appris à allier technique, créativité
          et logique pour produire des projets pertinents. Chaque réalisation me
          permet de renforcer mes compétences et d’apprendre de nouvelles approches.
        </p>
      </div>

      <div className="about-values">
        <div className="value-item">
          <h3>Précision</h3>
          <p>Des solutions soignées, propres et adaptées au besoin.</p>
        </div>
        <div className="value-item">
          <h3>Performance</h3>
          <p>Des projets rapides, réactifs et optimisés.</p>
        </div>
        <div className="value-item">
          <h3>Écoute</h3>
          <p>Une approche centrée sur les besoins de l’utilisateur.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
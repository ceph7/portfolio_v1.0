
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-page">
      <div className="hero-block">
        <div className="hero-text">
          <span className="eyebrow">Etudiant en Genie logiciel</span>
          <h1>Je conçois des sites modernes, rapides et pensés pour l’utilisateur.</h1>
          <p>
            Bonjour, je suis développeur web passionné par la création d’expériences
            digitales élégantes, performantes et accessibles.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Me contacter
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Découvrir mon profil
            </Link>
          </div>
              <div className="hero-buttons">        
          <a href="/ADZIMAH_Cephas_CV_DEF.pdf" download className="btn btn-secondary">
            Télécharger mon CV
          </a>
      </div>
{/* 
          <div className="hero-highlights">
            <div className="hero-highlight">
              <strong>React</strong>
              <span>Interfaces modernes</span>
            </div>
            <div className="hero-highlight">
              <strong>Laravel</strong>
              <span>Back-end fiable</span>
            </div>
            <div className="hero-highlight">
              <strong>Responsive</strong>
              <span>Sur tous les écrans</span>
            </div>
          </div> */}
        </div>

        <div className="hero-image">
          <img src="/images/profile.JPG" alt="Photo de profil" />
        </div>
      </div>

      <div className="info-grid">
        <article className="info-card">
          <h3>Ce que je propose</h3>
          <p>
            Développement de sites web modernes,applications web et optimisation de l’expérience
            utilisateur et mise en place de solutions sur mesure.
          </p>
        </article>

        <article className="info-card">
          <h3>Mon approche</h3>
          <p>
            J’accorde une importance particulière à la clarté, à la performance
            et à la qualité du rendu visuel.
          </p>
        </article>
      </div>

      <div className="projects-section">
        <div className="section-heading">
          <h2>Projets réalisés</h2>
          <p>Quelques exemples de réalisations qui reflètent mon travail.</p>
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <h3>Portfolio professionnel</h3>
            <p>Un site moderne, responsive et sécurisé avec React et Laravel.</p>
          </article>

          <article className="project-card">
            <h3>Application web de gestion de parc informatique</h3>
            <p>Une solution pensée pour répondre à un besoin précis et concret au sein des entreprises pour ameliorer
              le suivi du materiel affecté aux employés.</p>
          </article>

          <article className="project-card">
            <h3>Jeu vidéo</h3>
            <p>Une expérience fluide, visuelle et agréable pour les gamers.
              Jeu d'aventure et de survie.
            </p>
          </article>
        </div>
      </div>

      <div className="skills-section">
        <div className="section-heading">
          <h2>Compétences</h2>
          <p>Les outils et technologies que j’utilise au quotidien.</p>
        </div>

        <div className="skills-list">
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">CSS</span>
          <span className="skill-badge">JAVASCRIPT</span>
          <span className="skill-badge">REACT</span>
          <span className="skill-badge">PHP</span>
          <span className="skill-badge">LARAVEL</span>
          <span className="skill-badge">C#</span>
          <span className="skill-badge">C</span>
          <span className="skill-badge">PYTHON</span>
          <span className="skill-badge">JAVA</span>
          <span className="skill-badge">MYSQL</span>
          <span className="skill-badge">POSTGRESQL</span>
          <span className="skill-badge">SQLSERVER</span>

        </div>
      </div>

      <div className="experience-section">
        <div className="section-heading">
          <h2>Expérience</h2>
          <p>Un aperçu de mon parcours professionnel.</p>
        </div>

        <div className="experience-item">
          <h3>Stagiaire Ingénieur Data Warehouse</h3>
          <p><strong>YAS TOGO</strong> • Juil 2025 à Août 2025</p>
          <p>
            J’ai travaillé sur un script Python automatisé permettant de récupérer
            des données météo via une API afin d’améliorer la connaissance des
            conditions météorologiques sur l’ensemble du territoire togolais.
          </p>
        </div>
      </div>

      <div className="services-section">
        <div className="section-heading">
          <h2>Mes services</h2>
          <p>Des prestations utiles pour donner vie à votre projet web.</p>
        </div>

        <div className="info-grid">
          <article className="info-card">
            <h3>Développement web</h3>
            <p>
              Création de sites web modernes, rapides et adaptés aux besoins
              de vos utilisateurs.
            </p>
          </article>

           <article className="info-card">
            <h3>Développement Mobile</h3>
            <p>
              Création d'applications intuitives, rapides et pensées pour les utilisateurs.
            </p>
          </article>

          <article className="info-card">
            <h3>Maintenance et support</h3>
            <p>
              Mise à jour, correction de bugs et amélioration continue de votre
              présence en ligne.
            </p>
          </article>

          <article className="info-card">
            <h3>Conception d'architecture réseau</h3>
            <p>
              Mise en place d'architecture réseau sécurisée et performante pour vos systèmes informatiques.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Home;






















// function Home() {
//     return (
//         <section className="home-page">
//                 <div className="hero-block">
//                     <div className="hero-text">
//                         <h1>Je construis des solutions web modernes, rapides et sécurisées.</h1>
//                         <p>
//                         Bonjour, je suis développeur web passionné par la création d’applications
//                         performantes, élégantes et accessibles.
//                         </p>
//                         <div className="hero-actions">
//                         <a href="/contact" className="btn btn-primary">Me contacter</a>
//                         <a href="/about" className="btn btn-secondary">En savoir plus</a>
//                         </div>
//                     </div>

//             <div className="hero-image">
//                 <img src="/images/profile.JPG" alt="Photo de profil" />
//             </div>
//             </div>

//             <div className="info-grid">
//                 <div className="info-card">
//                     <h3>Compétences</h3>
//                     <ul>
//                         <li>React</li>
//                         <li>Laravel</li>
//                         <li>HTML / CSS / JavaScript</li>
//                     </ul>
//                 </div>

//                 <div className="info-card">
//                     <h3>Objectif</h3>
//                     <p>
//                         Créer des expériences digitales utiles, modernes et adaptées aux besoins
//                         des utilisateurs.
//                     </p>
//                 </div>
//             </div>

//             <div className="projects-section">
//   <h2>Projets réalisés</h2>

//   <div className="info-grid">
//     <div className="info-card">
//       <h3>Portfolio professionnel</h3>
//       <p>Un site moderne, responsive et sécurisé avec React et Laravel.</p>
//     </div>

//     <div className="info-card">
//       <h3>Application web sur mesure</h3>
//       <p>Une solution personnalisée pour répondre à un besoin précis.</p>
//     </div>

//     <div className="info-card">
//       <h3>Interface utilisateur moderne</h3>
//       <p>Une expérience fluide et agréable pour les visiteurs.</p>
//     </div>
//   </div>
// </div>

//             <div className="skills-section">
//                 <h2>Mes compétences</h2>
        
//                  <div className="skills-list">
//                         <span className="skill-badge">React</span>
//                         <span className="skill-badge">Laravel</span>
//                         <span className="skill-badge">HTML</span>
//                         <span className="skill-badge">CSS</span>
//                         <span className="skill-badge">JavaScript</span>
//                         <span className="skill-badge">API REST</span>
//                 </div>
//             </div>

//             <div className="experience-section">
//                 <h2>Mon expérience</h2>

//                 <div className="experience-item">
//                     <h3>Stagiaire Ingenieur Data Warehouse </h3>

//                     <p>YAS TOGO - Juil 2025 à Août 2025</p>
//                     <p>
//                         J’ai travaillé sur un script python automatisé conçu pour recuperer les données meteo via une API
//                         pour connaitre les conditions meteo sur toute l'étendue du territoire Togolais. Ce script a été intégré dans un projet plus vaste de gestion des données meteo.
//                     </p>
//                 </div>
//             </div>

//             <div className= "services-section">
//                 <h2>Mes services</h2>

//                 <div className="info-grid">
//                     <div className="info-card">
//                         <h3>Développement web</h3>
//                         <p>
//                             Création de sites web modernes, performants et adaptés aux besoins des utilisateurs.
//                         </p>
//                     </div>

//                     <div className="info-card">
//                         <h3>Maintenance et support</h3>
//                         <p>
//                             Maintenance de sites web existants, résolution de problèmes et mise à jour des fonctionnalités.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Home;

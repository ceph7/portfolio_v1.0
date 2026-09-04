const certifications = [
  {
    title: 'Certification à ajouter',
    issuer: 'Organisme de formation',
    date: 'Date d’obtention',
    file: '/certifications/certification-1.pdf',
  },
  {
    title: 'Certification à ajouter',
    issuer: 'Organisme de formation',
    date: 'Date d’obtention',
    file: '/certifications/certification-2.pdf',
  },
  {
    title: 'Certification à ajouter',
    issuer: 'Organisme de formation',
    date: 'Date d’obtention',
    file: '/certifications/certification-3.pdf',
  },
];

function Certifications() {
  return (
    <section className="certifications-page">
      <div className="page-intro">
        <span className="eyebrow">Parcours et formations</span>
        <h1>Mes certifications</h1>
        <p>
          Retrouve ici mes certificats et les documents qui attestent de mes compétences.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification, index) => (
          <article className="certification-card" key={certification.file}>
            <div className="certification-number">0{index + 1}</div>
            <div>
              <p className="certification-label">Certification</p>
              <h2>{certification.title}</h2>
              <p>{certification.issuer}</p>
              <small>{certification.date}</small>
            </div>
            <a
              className="btn btn-secondary certification-link"
              href={certification.file}
              target="_blank"
              rel="noreferrer"
            >
              Voir le certificat
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
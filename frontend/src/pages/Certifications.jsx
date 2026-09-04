const certifications = [
  {
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    fileName: 'certificate.pdf',
  },
  {
    title: 'Certificate - Seraph Cephas Adzimah',
    issuer: 'Certificat personnel',
    fileName: 'Certificate_Seraph Cephas Adzimah.pdf',
  },
  {
    title: 'Certificate of Completion - Future Interns',
    issuer: 'Future Interns',
    fileName: 'SERAPH_CEPHAS_ADZIMAH_FIT_JUL26_DS22052_Certificate.pdf',
  },
  { title: 'Introduction to Power BI', issuer: 'DataCamp', fileName: 'certificate-2.pdf' },
  { title: 'Intermediate SQL', issuer: 'DataCamp', fileName: 'certificate-3.pdf' },
  { title: 'Claude 101', issuer: 'DataCamp', fileName: 'certificate-4.pdf' },
  { title: 'Understanding Microsoft Azure', issuer: 'DataCamp', fileName: 'certificate-5.pdf' },
  { title: 'Advanced Git', issuer: 'DataCamp', fileName: 'certificate-6.pdf' },
];

function getCertificationUrl(fileName) {
  return `/images/certifications/${encodeURIComponent(fileName)}`;
}

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
          <article className="certification-card" key={certification.fileName}>
            <div className="certification-number">0{index + 1}</div>
            <div>
              <p className="certification-label">Certification</p>
              <h2>{certification.title}</h2>
              <p>{certification.issuer}</p>
              <small>Document PDF</small>
            </div>
            <a
              className="btn btn-secondary certification-link"
              href={getCertificationUrl(certification.fileName)}
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
const certifications = [
  {
    title: 'Certificat professionnel',
    issuer: 'Certificate.pdf',
    fileName: 'certificate.pdf',
  },
  {
    title: 'Certificat professionnel',
    issuer: 'Certificate_Seraph Cephas Adzimah.pdf',
    fileName: 'Certificate_Seraph Cephas Adzimah.pdf',
  },
  {
    title: 'Certification Data Science',
    issuer: 'SERAPH_CEPHAS_ADZIMAH_FIT_JUL26_DS22052_Certificate.pdf',
    fileName: 'SERAPH_CEPHAS_ADZIMAH_FIT_JUL26_DS22052_Certificate.pdf',
  },
  ...['certificate-2.pdf', 'certificate-3.pdf', 'certificate-4.pdf', 'certificate-5.pdf', 'certificate-6.pdf'].map((fileName) => ({
    title: 'Certificat professionnel',
    issuer: fileName,
    fileName,
  })),
];

function getCertificationUrl(fileName) {
  return `/images/certifications/${encodeURIComponent(fileName)}`;
}

function getCertificationDownloadName(fileName) {
  return fileName.replace(/\.pdf$/i, '');
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
              download={getCertificationDownloadName(certification.fileName)}
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
import { useState } from 'react';
import { submitContact } from '../services/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    if (!formData.name.trim()) return 'le nom est requis';
    if (!formData.email.trim()) return 'l\'email est requis';
    if (!formData.message.trim()) return 'le message est requis';
    return '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setError('');
    setShowSuccess(false);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContact(formData);
      setStatus(result.message || 'Message envoyé avec succès');
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      window.setTimeout(() => {
        setShowSuccess(false);
        setStatus('');
      }, 2500);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de l\'envoi du message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page">
      <h2>Contactez-moi</h2>

      <p>
        <strong><em>Vous avez un projet, une question ou une idée ? N’hésitez pas à me contacter.</em></strong>
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nom et Prenoms
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom et prenoms"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="test@example.com"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
          />
        </label>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>

        {error && (
          <div className="error-banner" role="alert">
            <span>✕</span>
            <p>{error}</p>
          </div>
        )}

        {showSuccess && status && (
          <div className="success-banner" role="status" aria-live="polite">
            <span>✓</span>
            <p>{status}</p>
          </div>
        )}

        {/* {status && <p>{status}</p>} */}

      </form>
    </section>
  );
}

export default Contact;
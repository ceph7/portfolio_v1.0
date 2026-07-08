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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const valiate = () => {
    if (!formData.name.trim()) return 'le nom est requis';
    if (!formData.email.trim()) return 'l\'email est requis';
    if (!formData.message.trim()) return 'le message est requis';
    return '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setError('');

    const validationError = valiate();
    if (validationError) {
      setStatus('');
      setError(validationError);
      return;
    }

    try {
      const result = await submitContact(formData);
      setStatus(result.message || 'Message envoyé avec succès');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
    //   setStatus('Une erreur est survenue');
      setError('Une erreur est survenue lors de l\'envoi du message.');
    }


  };

  return (
    <section className="contact-page">
      <h2>Contactez-moi</h2>

      <p>
        Vous avez un projet, une question ou une idée ? N’hésitez pas à me contacter.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nom
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
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

        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>

        {error && <p className="message error">{error}</p>}

        {status && <p className="message success">{status}</p>}

        {/* {status && <p>{status}</p>} */}

      </form>
    </section>
  );
}

export default Contact;
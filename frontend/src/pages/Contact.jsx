import { useState } from 'react';
import { submitContact } from '../services/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const result = await submitContact(formData);
      setStatus(result.message || 'Message envoyé avec succès');
    } catch (error) {
      setStatus('Une erreur est survenue');
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
            placeholder="Votre email"
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

        {status && <p>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
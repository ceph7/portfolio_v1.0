export async function submitContact(formData) {
  const response = await fetch('http://127.0.0.1:8000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Une erreur est survenue lors de l’envoi du message.');
  }

  return data;
}
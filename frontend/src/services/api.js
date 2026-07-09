const baseUrl = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');

export async function submitContact(formData) {
  let response;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error(
        'Le serveur met trop de temps à répondre. Veuillez réessayer dans quelques instants.'
      );
    }
    throw new Error(
      'Impossible de contacter le serveur. Vérifiez votre connexion internet et réessayez.'
    );
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message || 'Une erreur est survenue lors de l\'envoi du message.'
    );
  }

  return data;
}
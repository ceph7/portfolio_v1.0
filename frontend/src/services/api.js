export async function submitContact(formData) {

    const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
    })
     
    return await response.json();
}
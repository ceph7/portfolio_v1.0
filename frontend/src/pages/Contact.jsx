function Contact(){

    return (

        <section className="contact-page">
            <h2>Contactez-moi</h2>
            <p>Vous pouvez me contacter via le formulaire ci-dessous :</p>

            <form className="contact-form">
                <label htmlFor="name">Nom :</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" required />

                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com" required />

                <label htmlFor="message">Message :</label>
                <textarea id="message" name="message" placeholder="Votre message" required></textarea>

                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </section>
    );
}
export default Contact;
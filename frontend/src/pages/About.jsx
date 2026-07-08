function About(){

    return(
        <section className="about-page">
            <h2>A propos de moi</h2>
            <p>Je suis développeur web passionné par la création de solutions modernes,
            performantes et adaptées aux besoins des utilisateurs.</p>

            <div className="info-grid">
                <div className="info-card">
                    <h3>Mon parcours</h3>
                    <p>J’aime concevoir des interfaces claires et des applications fiables
                        qui offrent une vraie expérience utilisateur.
                    </p>
                </div>


                <div className="info-card">
                    <h3>Mes valeurs</h3>
                    <p>
                        Qualité, simplicité, sécurité et attention aux détails sont au cœur
                        de mon approche.
                    </p>
                </div>
            </div>

        </section>

    )
}
    
export default About;
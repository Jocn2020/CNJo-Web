import "./Contact.scss"

export const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-wrapper">
                <h1 className="contact-title">Contact Information</h1>
                <div className="contact-info">
                    <a href="mailto:jonathannitisastro@gmail.com">
                        <div className="contact-item mail">
                            <i className="far fa-envelope fa-2x"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/cn_jonathan/">
                        <div className="contact-item ig">
                            <i className="fab fa-instagram fa-2x"/>
                        </div>
                    </a>
                    <a href="https://github.com/Jocn2020">
                        <div className="contact-item github">
                            <i className="fab fa-github fa-2x"></i>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-nitisastro-ba781b193/">
                        <div className="contact-item linkedin">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;

import './Footer.css'

const Footer = () => {

    return (
        <footer id="main-footer">
            <div id="footer-container">
                <ul id="footer-col">
                    <h2 id="footer-title">Frontend</h2>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>Css</p>
                </ul>

                <ul id="footer-col">
                    <h2 id="footer-title">Backend</h2>
                    <p>Rails</p>
                    <p>Ruby</p>
                    <p>SQL</p>
                </ul>

                <ul id="footer-col">
                    <h2 id="footer-title">Other</h2>
                    <p>AWS S3 soon...</p>
                    <p>Google Maps API</p>
                </ul>

                <ul id="footer-col">
                    <h2 id="footer-title">Personal Links</h2>
                    <p><a id="per-link" href="https://github.com/Ethanjonm">GitHub</a></p>
                    <p><a id="per-link" href="https://www.linkedin.com/in/ethan-mercado-31312717a/">LinkedIn</a></p>
                </ul>

            </div>

            <p id="copyright">Copyright © 2023 Welp</p>
        </footer>
    )
}

export default Footer;
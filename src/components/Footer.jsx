import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12 custom-footer">
                    <h4 className='footer-title'>
                        <a href="https://github.com/motty-mandel" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/motty-mandel-7216651a1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/mandelmotty65/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </h4>
                </div>
            </div>
        </div>
        </footer>
    );
}
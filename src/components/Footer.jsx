import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12 custom-footer">
                    <h1 className='footer-title'>
                        Footer
                    </h1>
                    <p>&copy; 2023 Your Company</p>
                </div>
            </div>
        </div>
        </footer>
    );
}
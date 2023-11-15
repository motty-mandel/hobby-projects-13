import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default function Header() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 custom-header">
                    <h1 className='header-title'>
                        Motty Mandel
                    </h1>
                    <ul className='navLinks'>
                        <li>
                            <a href="/">About Me</a>
                        </li>
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/resume">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
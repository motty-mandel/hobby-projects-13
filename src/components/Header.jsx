import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

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
                            <Link to={'/'}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to={'/portfolio'}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to={'/resume'}>
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
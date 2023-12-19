import 'bootstrap/dist/css/bootstrap.min.css';
import './resume.css';

export default function Resume() {
    return (
        <div className="container">
            <div className="resume-row one">
                <div className="col name">
                    <h1>Motty Mandel</h1>
                    <h2>Front-end Developer</h2>
                </div>
            </div>
            <div className="resume-row two">
                <div className="col">
                    <h2>Experience</h2>
                    <p>Building websites freelance</p>
                </div>
            </div>
            <div className="resume-row three">
                <div className="col">
                    <h2>Education</h2>
                    <p>Rutgers Full-Stack Web Development Bootcamp</p>
                </div>
            </div>
            <div className="resume-row four">
                <div className="col">
                    <h2>Skills</h2>
                    <p>JavaScript, React, Node.js, HTML5, MongoDB, Express</p>
                </div>
            </div>
        </div>
    );
}
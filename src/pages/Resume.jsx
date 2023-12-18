import 'bootstrap/dist/css/bootstrap.min.css';
import './resume.css';

export default function Resume() {
    return (
        <div className="container">
            <div className="row main">
                <div className="col-md-6 name">
                    <h1>Motty Mandel</h1>
                    <h2>Front-end Developer</h2>
                </div>
                <div className="col-md-6 experience">
                    <h3>Experience</h3>
                    <p>Software Developer at XYZ Corp</p>
                    <p>Junior Developer at ABC Inc</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Education</h3>
                    <p>BSc in Computer Science, University of ABC</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Skills</h3>
                    <p>JavaScript, React, Node.js</p>
                </div>
            </div>
      </div>
    );
}
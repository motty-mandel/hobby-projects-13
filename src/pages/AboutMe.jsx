import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutMe.css';
import myPhoto from '../images/coolCar.jpg'

export default function AboutMe() {
    return (   
        <div className="container about-me-container">
        <div className="row">
          <div className="col-md-4 img-con">
            <img
              src={myPhoto}
              alt="Your Name"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8 bio-text">
            <h2>Hi, my name is <span>Motty Mandel</span></h2>
            <p>
              I am a passionate individual with a strong background in coding
              and a love for technology. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    );
}

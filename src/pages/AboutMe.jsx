import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutMe.css';
import '../index.css';
import myPhoto from '../images/motty-profile-pic.jpg'

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
              I am an enthusiastic and hardworking Full Stack Web Developer,
              with a passion for learning and a love for problem solving. I
              recently graduated from Rutgers Coding Bootcamp, where I learned
              the fundamentals of web development and how to work with a team.
              I enjoy the outdoors and spending time with my family. I am
              looking forward to applying my skills and learning new ones in a
              professional environment. 
            </p>
          </div>
        </div>
      </div>
    );
}

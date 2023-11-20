import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';
import '../index.css';
import ogPortfolio from '../images/og-portfolio.png';
import travelersGuide from '../images/travelers-guide.png';
import studyGuide from '../images/study-guide.png';
import techQuiz from '../images/tech-quiz.png';
import weatherApp from '../images/weather-app.png';

export default function Portfolio() {

  const projectData = [
    {
      id: 1,
      name: "Original Portfolio",
      image: ogPortfolio,
      githubLink: "https://github.com/motty-mandel/hobby-projects-1",
      deployed: "https://motty-mandel.github.io/hobby-projects-1/"
    },
    {
      id: 2,
      name: "Travelers Guide",
      image: travelersGuide,
      githubLink: "https://github.com/motty-mandel/travelers-guide",
      deployed: "https://motty-mandel.github.io/Travelers-guide/",
    },
    {
      id: 3,
      name: "Study Guide",
      image: studyGuide,
      githubLink: "https://github.com/motty-mandel/pre-work-repo",
      deployed: "https://motty-mandel.github.io/pre-work-repo/",
    },
    {
      id: 4,
      name: "Tech Quiz",
      image: techQuiz,
      githubLink: "https://github.com/motty-mandel/hobby-projects-3",
      deployed: "https://motty-mandel.github.io/hobby-projects-3/",
    },
    {
      id: 5,
      name: "Weather App",
      image: weatherApp,
      githubLink: "https://github.com/motty-mandel/hobby-projects-5",
      deployed: "https://motty-mandel.github.io/hobby-projects-5/",
    },
  ];

  return (
    <div>
      {projectData.map((project) => (
        <div key={project.id} className="project-item">
          <h3>{project.name}</h3>
          <img src={project.image} alt={project.name} />
          <p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Link
            </a>
            <br />
            <a href={project.deployed} target="_blank" rel="noopener noreferrer">
              Deployed project
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
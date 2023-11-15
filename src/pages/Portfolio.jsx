import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';
import '../images/og-portfolio.png';
import '../images/travelers-guide.png';

export default function Portfolio() {

    const projectData = [
        {
          id: 1,
          name: "Original Portfolio",
          image: "../images/og-portfolio.png",
          githubLink: "https://github.com/motty-mandel/hobby-projects-1",
        },
        {
            id: 2,
            name: "Travelers Guide",
            image: "../images/travelers-guide.png",
            githubLink: "https://github.com/motty-mandel/travelers-guide",
          },
    ];

    return (
        <div>
        <h2>Previous Projects</h2>
        {projectData.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} />
            <p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Link
              </a>
            </p>
          </div>
        ))}
      </div>
    );
}
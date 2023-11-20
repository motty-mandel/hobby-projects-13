import 'bootstrap/dist/css/bootstrap.min.css';
import './resume.css';
import '../index.css';

const sections = [
    {
        id: 1,
        name: "Overview",
        data: `Hello, my name is Motty Mandel.
        I am a beginner full stack web developer ready to
        learn hard and work hard.`,
    },
    {
        id: 2,
        name: "Education",
        data: `I spent six months learning Full Stack Web Development online with 
        Rutgers Bootcamp. It was a lot of fun learning with them and I am 
        ready to go out into the world.
        `
    },
    {
        id: 3,
        name: "Skills",
        data: `Some of my language skills include: JavaScript, HTML, and CSS. React,
         Node, Express, MySQL and MongoDB are some of my library skills. I am also 
         used to working with Agile and Scrum methodologies.`,
    },
    {
        id: 4,
        name: "Projects",
        data: `I have completed a few projects during my time at Rutgers Bootcamp, 
        including this portfolio, and others that you can check out in the 
        projects page or in my GitHub repositories.`,
    },
]

export default function Resume() {
    return (
        <div className="container resume-container">
        {sections.map((sections) => (
            <div key={sections.id} className="row">
                <div className="col-md-4 title-con">
                    <h1>{sections.name}</h1>
                </div>
                <div className="col-md-8 resume-text">
                    <p>
                        {sections.data}
                    </p>
                </div>
            </div>
        ))}
      </div>
      
    );
}
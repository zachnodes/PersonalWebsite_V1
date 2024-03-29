import Projects from "../components/projects";
import PortStyles from "../styles/Portfolio.module.css"
import { blogSite, todo, cvApp } from '../project_descriptions/data';




const Portfolio = () => {

    return (
        <div id='portfolio' className={PortStyles.wrapper}>
            <div className={PortStyles.container}>
                <h1 id={PortStyles.projects}>Projects</h1>
            </div>
            <div>
                <Projects
                    number={blogSite.number}
                    title={blogSite.title}
                    description={blogSite.description}
                    photo={blogSite.photo}
                    code={blogSite.code}
                    tech1={blogSite.tech1}
                    tech2={blogSite.tech2}
                    tech3={blogSite.tech3}
                    tech4={blogSite.tech4}
                    tech5={blogSite.tech5}
                />
                <Projects
                    number={cvApp.number}
                    title={cvApp.title}
                    description={cvApp.description}
                    code={cvApp.code}
                    demo={cvApp.demo}
                    photo={cvApp.photo}
                    tech1={cvApp.tech1}
                    tech2={cvApp.tech2}
                />
                <Projects
                    number={todo.number}
                    title={todo.title}
                    photo={todo.photo}
                    description={todo.description}
                    code={todo.code}
                    demo={todo.demo}
                    tech1={todo.tech1}
                    tech2={todo.tech2}
                />
                
            </div>
        </div>
    );
}

export default Portfolio;

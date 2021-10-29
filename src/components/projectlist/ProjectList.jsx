import "./ProjectList.scss"
import Project from "../project/Project"
import {projects} from "./projects"

const ProjectList = () => {
    return (
        <div className="projects">
            <div className="projects-texts">
                <h1 className="projects-title">Project List</h1>
                <p className="projects-desc">
                    Hover to the project to see more images
                </p>
            </div>
            <div className="projects-list">
                {projects.map((item) => (
                    <Project key={item.id} name={item.name} images={item.images} link={item.link} tools={item.tools}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectList;
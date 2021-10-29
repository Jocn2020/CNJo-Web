import "./experiences.scss"
import Experience from "./Experience"
const Experiences = () => {
    return (
        <div className="experiences">
            <div className="experiences-left">
                <div className="experiences-card bg"></div>
                <div className="experiences-card">
                </div>
            </div>
            <div className="experiences-right">
                <h1 className="experiences-title">Work Experiences</h1>
                <div className="experiences-list">
                    <Experience/>
                </div>
            </div>
        </div>
    )
}

export default Experiences;
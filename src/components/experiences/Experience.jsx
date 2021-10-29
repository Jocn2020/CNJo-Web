import "./Experience.scss"
import wish from "../../img/wish-logo.jpeg"
const Experience = () => {
    return (
        <div className="achievement">
            <div className="achievement-content">
                <div className="experience-top">
                    <div className="experience-title">Software Engineer in Test (@Wish)</div>
                    <div className="experience-company">
                        <img src={wish} alt="" className="company-logo"/>
                    </div>
                </div>
                <div className="experience-info">
                    <div className="experience-content">
                        <div className="experience-icon">
                            <i class="fa fa-calendar" aria-hidden="true"/>
                        </div>
                        Sept 2021 - Present</div>
                    <div className="experience-content">
                        <div className="experience-icon">
                            <i class="fa fa-map-marker" aria-hidden="true"/>
                        </div>
                        Canada (Remote)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
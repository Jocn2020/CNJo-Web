import "./Intro.scss"
import star from "../../img/sparkle-star.gif"
import wish from "../../img/wish-logo.jpeg"
import waterloo from "../../img/waterloo.png"

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="left-wrapper">
                    <h2 className="intro-text">Hello World!, This is</h2>
                    <h1 className="intro-name">Jonathan CN</h1>
                    <div className="intro-box">
                        <div className="intro-title">
                            <div className="intro-title-wrapper">
                                <div className="intro-title-item">Software Engineer</div>
                                <div className="intro-title-item">MO-er (Math Olympiad)</div>
                                <div className="intro-title-item">Data Scientist</div>
                                <div className="intro-title-item">Professional Whistler</div>
                                <div className="intro-title-item"><strike>Omniscient</strike> Manga Reader</div>
                                <div className="intro-title-item">Solo Leveler</div>
                                <div className="intro-title-item">Money Gacha Analyst</div>
                                <div className="intro-title-item">Food Entusiast</div>
                                <div className="intro-title-item">Looking for Fun!</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="intro-about">
                        <div className="about-item">
                            <div className="about-item-title">Current Term (Fall 2021)</div>
                            <div className="about-item-desc">
                                <a href="https://www.wish.com/">
                                    <img src={wish} alt="" className="about-item-logo"/>
                                </a>
                                Software Engineer in Test Intern</div>
                        </div>
                        <div className="about-item">
                            <div className="about-item-title">Education</div>
                            <div className="about-item-desc">
                            <a href="https://cs.uwaterloo.ca/">
                                <img src={waterloo} alt="" className="about-item-logo"/>
                            </a>
                            University of Waterloo, Canada</div>
                            <div className="about-item-desc">Bachelor of Computer Science, CAV: 92.8%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg">
                    <img src={star} alt="" className="intro-img"/>
                </div>
            </div>
        </div>
    )
}

export default Intro;
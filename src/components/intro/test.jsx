import "./test.scss"
import sun from "../../img/sun.png"

const Test2 = () => {
    return (
        <div class="project">
            <div class="project-image">
                <img src={sun}/>
            </div>
            <div class="project-content">
                <div class="project-wrapper">
                    <h1>BlowItUp</h1>
                    <p>Multiplayer platformer maze game</p>
                </div>
                <ul>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Test2;
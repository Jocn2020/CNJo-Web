import { useState } from 'react';
import "./Achievements.scss"
import trophy from "../../img/trophy-png-25059.png"
import { AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import Achievement from "./Achievement"
import { achievements } from "./achievementList"

const Achievements = () => {
    const [current, setCurrent] = useState(0);
    const length = achievements.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(achievements) || achievements.length <= 0) {
        return null;
    }
    return (
        <div className="achievements">
            <div className="achievements-title">
               <img src={trophy} alt="" className="title-icon"/>
               <div className="achievement-text">Achievements</div>  
            </div>
            <div className="achievements-list">
                <AiOutlineDoubleLeft size={80} className="achievements-arrow left" onClick={prevSlide}/>
                {achievements.map((item, index) => {
                    var direction = "";
                    if ((current === 0 && index === length-1) || (current > 0 && index === current-1)){
                        direction = "left ";
                    } else if ((current === length-1 && index === 0) || (current < length-1 && index === current+1)){
                        direction = "right ";
                    }
                    return (
                    <div className={'slide ' + direction + (index === current ? 'active' : '')} key={index}>
                        {index == current && 
                        <Achievement 
                            key={item.id}
                            title={item.title}
                            date={item.date}
                            loc={item.loc}
                            locMore={item.locMore}
                            desc={item.desc}
                            award={item.award}
                            />}
                    </div>
                    )
                })}
                <AiOutlineDoubleRight size={80} className="achievements-arrow right" onClick={nextSlide}/>
            </div>
        </div>
    )
}

export default Achievements
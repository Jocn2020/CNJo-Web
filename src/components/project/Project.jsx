import "./Project.scss"
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const Project = ({name, images, link, tools}) => {
    const [display, setDisplay] = useState(0);
    const length = images.length;

    const goToNextImage = () => {
        if(display == length-1){
            setDisplay(0);
        } else {
            setDisplay(display+1);
        }
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="motion"
        >
            <motion.div 
                whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)"
                }}
                className="project"
            >
                <div className="project-browser">
                    <div className="project-circle"></div>
                    <div className="project-circle"></div>
                    <div className="project-circle"></div>
                </div>
                <div className="project-content">
                    <a href={link} target="_blank" onMouseEnter={goToNextImage}>
                        {images.map((image, index) => {
                            return <img 
                            src={ index == display && image} 
                            alt="" 
                            className={"project-img" + (index === display ? " active" : "")} />
                        })}
                        <div className="project-detail">
                            <div className="project-name">{name}</div>
                            <div className="project-tools">
                                {tools.map((tool) => {
                                    return tool;
                                })}
                            </div>
                        </div>
                    </a>
                </div>
                
            </motion.div>          
        </motion.div>
    )
}

export default Project;
import blowitup1 from "../../img/blowitup/blowitup-1.png"
import blowitup2 from "../../img/blowitup/blowitup-2.png"
import blowitup3 from "../../img/blowitup/blowitup-3.png"
import blowitup4 from "../../img/blowitup/blowitup-4.png"

import wewatch1 from "../../img/wewatch/wewatch-1.png"
import wewatch2 from "../../img/wewatch/wewatch-2.png"
import wewatch3 from "../../img/wewatch/wewatch-3.png"
import wewatch4 from "../../img/wewatch/wewatch-4.png"

import gcal1 from "../../img/daily-gcal/gcal-1.png"
import gcal2 from "../../img/daily-gcal/gcal-2.png"
export const projects = [
    {
        id: 1,
        name: "BlowItUp",
        images: [blowitup1, blowitup2, blowitup3, blowitup4],
        link: "https://devpost.com/software/blowitup",
        tools: [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt=""/>,
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=""/>,
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt=""/>]
    }, {
        id: 2,
        name: "WeWatch",
        images: [wewatch1, wewatch2, wewatch3, wewatch4],
        link: "https://github.com/Jocn2020/WeWatch-Network",
        tools: [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt=""/>,
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt=""/>,
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt=""/>,
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt=""/>]
    }, {
        id: 3,
        name: "Gcal-bot",
        images: [gcal1, gcal2],
        link: "https://github.com/Jocn2020/DailyGCal-Bot",
        tools: [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt=""/>,
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt=""/>,
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt=""/>,
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt=""/>]
    }
]
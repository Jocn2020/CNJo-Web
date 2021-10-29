import "./Achievement.scss"

const Achievement = ({title, date, loc, locMore, desc, award}) => {
    return (
        <div className="achievement">
            <div className="achievement-content">
                <div className="achievement-top">
                    <div className={"achievement-left " + award}>{title}</div>
                    <div className="achievement-right">
                        <div className="achievement-content">
                            <div className="achievement-icon">
                                <i class="fa fa-calendar" aria-hidden="true"/>
                            </div>
                            {date}</div>
                        <div className="achievement-content">
                            <div className="achievement-icon">
                                <i class="fa fa-map-marker" aria-hidden="true"/>
                            </div>
                            {loc}
                            <div className="achievement-text">{locMore}</div>
                        </div>
                    </div>
                </div>
                <div className="achievement-info">
                    <div className="achievement-item">
                    <i className="fa fa-trophy" aria-hidden="true"/>
                    {desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievement
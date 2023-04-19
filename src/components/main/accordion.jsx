import React, { useState } from "react";
import arrowDown from "../../assets/img/Components/main/arrow_down.svg";
import arrowUp from "../../assets/img/Components/main/arrow_up.svg";
import "../../SCSS/Components/main/accordion.scss";

let Accordion = ({ id, title, description }) => {
    const [isActive, setIsActive] = useState(false);
    let klass;
    isActive ? klass='accordion__title accordion__title-active' : klass='accordion__title'
    return (
        <>
            <div className="accordion__item" key={id}>
                <div className={klass} onClick={() => setIsActive(!isActive)}>
                    <div>{title}</div>
                    {isActive ? (
                        <img src={arrowUp} alt="arrowUp" />
                    ) : (
                        <img src={arrowDown} alt="arrowDown" />
                    )}
                </div>
                {isActive && (<div className="accordion__content">{description}</div>
                )}
            </div>
            <hr className="accordion__hr"/>
        </>
    );
};

export default Accordion;

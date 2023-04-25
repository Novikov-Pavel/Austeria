import React from "react";
import ACCORDION from "./accordion";
import * as DB from "../../DB";
import "../../SCSS/Components/main/FAQ.scss";

let FAQ = () => {
    return (
        <div className="faq" id="faq">
            <h1 className="faq__h1">Часто задаваемые вопросы</h1>
            <div className="accordion">
                {DB.accordion.map(({ title, description, id }) => (
                    <ACCORDION
                        title={title}
                        description={description}
                        id={id}
                        key={id}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;

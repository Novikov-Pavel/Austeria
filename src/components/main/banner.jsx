import React from "react";
import "../../SCSS/Components/main/banner.scss";
import { NavLink } from "react-router-dom";

let banner = () => {
    return (
        <div className="banner">
            <div className="banner_info">
                <p className="banner_H0">Спортивные респираторы</p>
                <span className="banner_disc">Эффективная защита органов дыхания при интенсивных тренировках</span>
                <NavLink to={'/'} className="banner_button"><span>Перейти в каталог</span></NavLink>
            </div>
        </div>
    );
};

export default banner;

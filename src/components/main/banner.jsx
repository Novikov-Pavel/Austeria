import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "../../SCSS/Components/main/banner.scss";

let banner = () => {
    return (
        <div className="banner">
            <div className="banner_info">
                <p className="banner_H0">Спортивные респираторы</p>
                <span className="banner_disc">Эффективная защита органов дыхания при интенсивных тренировках</span>
                <Link to='#catalog' className="banner_button" ><span>Перейти в каталог</span></Link>
            </div>
        </div>
    );
};

export default banner;

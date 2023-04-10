import React from "react";
import "../../SCSS/Components/main/banner/banner.scss";

let banner = () => {
    return (
        <div className="banner">
            <div className="banner_info">
                <p className="banner_info_H0">Спортивные респираторы</p>
                <span className="banner_info_disc">Эффективная защита органов дыхания при интенсивных тренировках</span>
                <button className="banner_info_button"><span>Перейти в каталог</span></button>
            </div>
        </div>
    );
};

export default banner;

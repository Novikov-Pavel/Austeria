import React from "react";
import "../../SCSS/Components/main/advantages.scss";
import "../main/slider";
import Slider from "../main/slider";

let advantages = () => {
    return (
        <div className="advantages">
            <div className="advantages_infos">
                <div className="advantages_position">
                    <p className="advantages_plus">+</p>
                    <div className="advantages_item">
                        <p className="advantages_title">Комфорт</p>
                        <span className="advantages_desc">
                            Наши респираторы легко надевать и носить.
                            Максимальная вентиляция, качественные материалы
                            и функциональный дизайн гарантируют комфортную
                            защиту.
                        </span>
                    </div>
                </div>

                <div className="advantages_position">
                    <p className="advantages_plus">+</p>
                    <div className="advantages_item">
                        <p className="advantages_title">Безопасность</p>
                        <span className="advantages_desc">
                            Наши респираторы разработаны и прошли проверку
                            в Великобритании, соответствуют высочайшим
                            требованиям стандартов безопасности.
                        </span>
                    </div>
                </div>

                <div className="advantages_position">
                    <p className="advantages_plus">+</p>
                    <div className="advantages_item">
                        <p className="advantages_title">Качество</p>
                        <span className="advantages_desc">
                            Наша продукция сделана из проверенных материалов.
                            И имеет соответствующие сертификаты качества.
                        </span>
                    </div>
                </div>
            </div>
            <div className="advantages_slider">                
                <Slider />
            </div>
        </div>
    );
};

export default advantages;

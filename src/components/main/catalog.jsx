import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import * as DB from "../../DB";
import "swiper/css";
import "swiper/css/navigation";
import "../../SCSS/Components/main/catalog.scss";

let Catalog = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = index => setToggleState(index);

    return (
        <div className="catalog" id="catalog">
            <h1>КАТАЛОГ НАШЕЙ ПРОДУКЦИИ</h1>
            <div className="catalog__form">
                <button className="catalog__form__resp" onClick={() => toggleTab(1)}>РЕСПИРАТОРЫ</button>
                <button className="catalog__form__resp" onClick={() => toggleTab(2)}>ФИЛЬТРЫ</button>
                <button className="catalog__form__resp" onClick={() => toggleTab(3)}>КЛАПАНЫ</button>
            </div>

            <Swiper
                className={toggleState === 1 ? "swiper" : "content"}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
            >
                {DB.resp.map((e) => {
                    const { id, img, title, price, description } = e;
                    return (
                        <SwiperSlide className="swiper" key={id}>
                            <img src={img} alt={id} />
                            <div className="swiper__title">{title}</div>
                            <div className="swiper__price">{price} руб</div>
                            <div className="swiper__description">
                                {description}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <Swiper
                className={toggleState === 2 ? "swiper" : "content"}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
            >
                {DB.filters.map((e, i) => {
                    const { id, img, title, price, description } = e;
                    return (
                        <SwiperSlide className="swiper" key={id}>
                            <img src={img} alt={id} />
                            <div className="swiper__title">{title}</div>
                            <div className="swiper__price">{price} руб</div>
                            <div className="swiper__description">
                                {description}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <Swiper
                className={toggleState === 3 ? "swiper" : "content"}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
            >
                {DB.klapans.map((e) => {
                    const { id, img, title, price, description } = e;
                    return (
                        <SwiperSlide className="swiper" key={id}>
                            <img src={img} alt={id} />
                            <div className="swiper__title">{title}</div>
                            <div className="swiper__price">{price} руб</div>
                            <div className="swiper__description">
                                {description}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Catalog;

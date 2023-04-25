import React,  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import * as DB from "../../DB";
import "swiper/css";
import "swiper/css/navigation";
import "../../SCSS/Components/main/catalog.scss";

let Catalog = () => {
    
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => setToggleState(index)

    return (
        <div className="catalog">
            <h1>КАТАЛОГ НАШЕЙ ПРОДУКЦИИ</h1>
            <div className="catalog__form">
                <button 
                className={toggleState === 1 ? "catalog__form__resp active-tabs" : "catalog__form__resp"}
                onClick={() => toggleTab(1)}>РЕСПИРАТОРЫ</button>
                
                <button className={toggleState === 2 ? "catalog__form__filter active-tabs" : "catalog__form__filter"}
                onClick={() => toggleTab(2)}>ФИЛЬТРЫ</button>
                
                <button className={toggleState === 3 ? "catalog__form__klapan active-tabs" : "catalog__form__klapan"}
                onClick={() => toggleTab(3)}>КЛАПАНЫ</button>
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
                    const {id, img, title, price, description} = e
                    return <SwiperSlide className="swiper" key={id}>
                        <img src={img} alt={id} />
                        <div className="swiper__title">{title}</div>
                        <div className="swiper__price">{price} руб</div>
                        <div className="swiper__description">{description}</div>                       
                    </SwiperSlide>
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
                
                {DB.filters.map((e,i) => {
                    const {id, img, title, price, description} = e
                    return <SwiperSlide className="swiper">
                        <img src={img} alt={id} />
                        <div className="swiper__title">{title}</div>
                        <div className="swiper__price">{price} руб</div>
                        <div className="swiper__description">{description}</div>       
                    </SwiperSlide>
                
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
                
                {DB.klapans.map((e,i) => {
                    const {id, img, title, price, description} = e
                    return <SwiperSlide className="swiper">
                        <img src={img} alt={id} />
                        <div className="swiper__title">{title}</div>
                        <div className="swiper__description">{description}</div>                       
                    </SwiperSlide>
                
                })}
                
                
            </Swiper>

            <form action="" className="catalog__form">
                    <button type="submit" className="catalog__order" onClick={() => console.log('123')}><span>ЗАКАЗАТЬ</span></button>
                </form>
        </div>
    );
};

export default Catalog;

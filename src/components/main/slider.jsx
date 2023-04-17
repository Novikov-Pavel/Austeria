import React, { useState, useEffect } from "react";
import logo from "../../assets/img/Components/main/blue_mask.jpg";
import logo1 from "../../assets/img/Components/main/black_mask.jpg";
import logo2 from "../../assets/img/Components/main/blue_mask.jpg";
import left from "../../assets/img/Components/main/left.svg";
import right from "../../assets/img/Components/main/right.svg";
import "../../SCSS/Components/main/slider.scss";

const img = [
    { id: 1, image: logo },
    { id: 2, image: logo1 },
    { id: 3, image: logo2 },
];

const Slider = () => {
    const [people, setPeople] = useState(img);
    const [currentIndex, setCurrentIndex] = useState(0);
    /* Бесконечный слайдер */
    useEffect(() => {
        const lastIndex = people.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex);
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [people, currentIndex]);
    /* Автоматическая прокрутка */
    useEffect(() => {
        let slider = setInterval(() => {
            setCurrentIndex((prevState) => prevState + 1);
        }, 3000);
        return () => clearInterval(slider);
    }, [currentIndex]);

    return (
        <>
            {people.map((e, i) => {
                const { id, image } = e;

                let position = "nextSlide";

                if (i === currentIndex) {
                    position = "activeSlide";
                }

                if (i === currentIndex - 1) {
                    position = "lastSlide";
                }

                return (
                    <article className={position} key={id}>
                        <img src={image} alt={id} />
                    </article>
                );
            })}
            <img
                alt="left_arrow"
                src={left}
                className="last"
                onClick={() => setCurrentIndex((prevState) => prevState - 1)}
            />
            <img
                alt="right_arrow"
                src={right}
                className="next"
                onClick={() => setCurrentIndex((prevState) => prevState + 1)}
            />
        </>
    );
};

export default Slider;

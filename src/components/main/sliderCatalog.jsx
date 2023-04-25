import React, { useState, useEffect } from "react";
import mask1 from "../../assets/img/Components/main/Catalog/mask-black.png";
import mask2 from "../../assets/img/Components/main/Catalog/mask-red.png";
import mask3 from "../../assets/img/Components/main/Catalog/mask-green.png";
import mask4 from "../../assets/img/Components/main/Catalog/mask-blue.png";
import left from "../../assets/img/Components/main/left.svg";
import right from "../../assets/img/Components/main/right.svg";
import "../../SCSS/Components/main/sliderCatalog.scss";

const CatalogImg = [
    { id: 1, img: mask1 },
    { id: 2, img: mask2 },
    { id: 3, img: mask3 },
    { id: 4, img: mask4 },
];

let SliderCatalog = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastSlide1 = CatalogImg.length - 1;
        if (index <= -1) {
            setIndex(lastSlide1);
        }
        if (index > lastSlide1) {
            setIndex(0);
        }
    }, [index]);

    return (
        <div className="sliderCatolog">
            <div className="sliderCatolog__img">
                {CatalogImg.map((e, i) => {
                    const { id, img } = e;

                    let position = "nextSl";

                    if (i < index - 1) {
                        position = "lastSl";
                    }

                    if (i === index) {
                        position = "currentSl";
                    }
                    if (i === index + 1) {
                        position = "currentSl";
                    }
                    if (i === index + 2) {
                        position = "currentSl";
                    }

                    return (
                        <div className={position}>
                            <img src={img} alt={id} />
                        </div>
                    );
                })}
            </div>

            <img
                className="sliderCatolog__left"
                src={left}
                alt="left"
                onClick={() => setIndex((prevState) => prevState - 1)}
            />
            <img
                className="sliderCatolog__right"
                src={right}
                alt="right"
                onClick={() => setIndex((prevState1) => prevState1 + 1)}
            />
        </div>
    );
};

export default SliderCatalog;

import React, { useState } from "react";
import { ReactSocialMediaIcons } from "react-social-media-icons";
import SOCIALPHOTOS from "./socialPhotos";
import * as DB from "../../DB";
import paginationLeft from "../../assets/img/Components/main/pagination-left.svg";
import paginationRight from "../../assets/img/Components/main/pagination-right.svg";
import "../../SCSS/Components/main/social.scss";

let Social = () => {
    const [page, setPage] = useState(1);
    const [countImgPerPage] = useState(6);

    let lastItem = page * countImgPerPage;
    let firstItem = lastItem - countImgPerPage;
    let currentItem = DB.social.slice(firstItem, lastItem);
    let paginate = (number) => setPage(number);

    return (
        <div className="social">
            <h1 className="social__h1">СЛЕДИТЕ ЗА НАМИ В СОЦСЕТЯХ</h1>
            <div className="social__photos">
                <div className="social__photos__icons">
                    <ReactSocialMediaIcons
                        icon="vk"
                        backgroundColor="#FFFFFF"
                        iconColor="#333"
                        url="/"
                        size="34"
                        iconSize="2"
                        borderWidth="0"
                        roundness="0"
                    />
                    <ReactSocialMediaIcons
                        icon="youtube-play"
                        backgroundColor="#FFFFFF"
                        iconColor="#333"
                        url="/"
                        size="34"
                        iconSize="2"
                        borderWidth="0"
                        roundness="0"
                    />
                    <ReactSocialMediaIcons
                        icon="instagram"
                        backgroundColor="#FFFFFF"
                        iconColor="#333"
                        url="/"
                        size="34"
                        iconSize="2"
                        borderWidth="0"
                        roundness="0"
                    />
                    <ReactSocialMediaIcons
                        icon="facebook"
                        backgroundColor="#FFFFFF"
                        iconColor="#333"
                        url="/"
                        size="34"
                        iconSize="2"
                        borderWidth="0"
                        roundness="0"
                    />
                </div>
                <div className="social__photos__photos">
                    {currentItem.map(({ img, id }) => {
                        return <SOCIALPHOTOS img={img} id={id} key={id}/>;
                    })}
                </div>
            </div>
            <img
                className="social__img"
                src={paginationLeft}
                alt="paginationLeft"
                onClick={() =>
                    page > 1
                        ? paginate(page - 1)
                        : paginate(
                              Math.ceil(DB.social.length / countImgPerPage)
                          )
                }
            />
            <img
                className="social__img"
                src={paginationRight}
                alt="paginationRight"
                onClick={() =>
                    page >= Math.ceil(DB.social.length / countImgPerPage)
                        ? paginate(1)
                        : paginate(page + 1)
                }
            />
        </div>
    );
};

export default Social;

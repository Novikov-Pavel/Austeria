import React from "react";
import { NavLink } from "react-router-dom";
import { MAIN } from "../consts";
import logo from "../assets/img/Components/Footer/logo_footer.svg";
import "../SCSS/Components/Footer/Footer.scss";
import mail from "../../src/assets/img/Components/Footer/mail_footer.svg";
import phone from "../../src/assets/img/Components/Footer/phone_footer.svg";
import { ReactSocialMediaIcons } from "react-social-media-icons";

let footer = () => {
    return (
        <div className="footer">
            {/*********************************************** Logo & policy **************************************/}
            <div className="footer_logo">
                <NavLink to={MAIN}>
                    <img src={logo} alt="logo" />
                </NavLink>
                <p>
                    © Маски-респираторы от пыли пыльцы,
                    <br />
                    AllergyMask. Россия, Москва. 2016–{new Date().getFullYear()}
                </p>
                <NavLink to={MAIN} className="footer_logo_policy">
                    Политика конфиденциальности
                </NavLink>
            </div>
            {/*********************************************** Socials **************************************/}
            <div className="footer_social">
                <div className="footer_social_mail">
                    <img src={mail} alt="mail" />
                    <NavLink
                        to={`mailto: ${process.env.REACT_APP_MAIL}`}
                        className="footer_social_mail_url"
                    >
                        {process.env.REACT_APP_MAIL.toUpperCase()}
                    </NavLink>
                </div>
                <div className="footer_social_icons">
                    <ReactSocialMediaIcons
                        icon="vk"
                        backgroundColor="#00960F"
                        url="/"
                        size="34"
                        iconSize="2"
                        borderWidth="0"
                        roundness="0"
                    />
                    <ReactSocialMediaIcons
                        icon="youtube-play"
                        backgroundColor="#00960F"
                        url="/"
                        size="34"
                        iconSize="2"
                        borderWidth="0"
                        roundness="0"
                    />
                    <ReactSocialMediaIcons
                        icon="instagram"
                        backgroundColor="#00960F"
                        url="/"
                        size="34"
                        iconSize="2"
                        borderWidth="0"
                        roundness="0"
                    />
                    <ReactSocialMediaIcons
                        icon="facebook"
                        backgroundColor="#00960F"
                        url="/"
                        size="34"
                        iconSize="2"
                        borderWidth="0"
                        roundness="0"
                    />
                </div>
            </div>
            {/*********************************************** Call **************************************/}
            <div className="footer_phone">
                <div className="footer_phone_call">
                    <img src={phone} alt="phone" />
                    <NavLink
                        to={`telto: ${process.env.REACT_APP_PHONE}`}
                        className="footer_phone_call_number"
                    >
                        {process.env.REACT_APP_PHONE}
                    </NavLink>
                </div>
                <button type="button">
                    <span>ЗАКАЗАТЬ ЗВОНОК</span>
                </button>
            </div>
        </div>
    );
};

export default footer;

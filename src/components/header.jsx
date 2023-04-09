import React from "react";
import logo from "../assets/img/Components/Header/logo.svg";
import mail from "../assets/img/Components/Header/mail.svg";
import phone from "../assets/img/Components/Header/phone.svg";
import "../SCSS/Components/Header/Header.scss";
import { ABOUT, MAIN } from "../consts";
import { NavLink } from "react-router-dom";

let header = () => {
    return (
        <div className="header">
            {/*********************************************** Logo *******************************************/}{" "}
            <NavLink to={MAIN}>
                <img src={logo} alt="logo" />
            </NavLink>
            {/*********************************************** Menu *******************************************/}
            <div className="header_menu">
                <NavLink to={ABOUT} className="header_menu_items">
                    <span>Каталог</span>
                </NavLink>
                <NavLink to={ABOUT} className="header_menu_items">
                    <span>Статьи</span>
                </NavLink>
                <NavLink to={ABOUT} className="header_menu_items">
                    <span>FAQ</span>
                </NavLink>
                <NavLink to={ABOUT} className="header_menu_items">
                    <span>О компании</span>
                </NavLink>
            </div>
            {/*********************************************** Contacts **************************************/}
            <div className="header_contacts">
                <div className="header_contacts_mail">
                    <img src={mail} alt="mail" />
                    <NavLink
                        to={`mailto: ${process.env.REACT_APP_MAIL}`}
                        className="header_contacts_mail_url"
                    >
                        {process.env.REACT_APP_MAIL}
                    </NavLink>
                </div>
                <div className="header_contacts_phone">
                    <img src={phone} alt="phone" />
                    <a
                        className="header_contacts_phone_url"
                        href={`tel: ${process.env.REACT_APP_PHONE}`}
                    >
                        {process.env.REACT_APP_PHONE}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default header;

import React from "react";
import logo from "../assets/img/Components/Header/logo.svg";
import mail from "../assets/img/Components/Header/mail.svg";
import phone from "../assets/img/Components/Header/phone.svg";
import { ABOUT, MAIN, ARTICLEPAGE } from "../consts";
import { Link, NavLink } from "react-router-dom";
import "../SCSS/Components/Header/Header.scss";

let Header = () => {
    return (
        <div className="header">
            {/*********************************************** Logo *******************************************/}{" "}
            <NavLink to={MAIN}>
                <img src={logo} alt="logo" />
            </NavLink>
            {/*********************************************** Menu *******************************************/}
            <div className="header_menu">
                <Link to={"/"} className={"header_menu_items"}>
                    <span>Каталог</span>
                </Link>
                <Link to={ARTICLEPAGE} className={"header_menu_items"}>
                    <span>Статьи</span>
                </Link>
                <Link to={"/1"} className={"header_menu_items"}>
                    <span>FAQ</span>
                </Link>
                <Link to={ABOUT} className={"header_menu_items"}>
                    <span>О компании</span>
                </Link>
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
                    <Link
                        className="header_contacts_phone_url"
                        to={`tel: +${process.env.REACT_APP_PHONE.replace(
                            /\D+/gi,
                            ""
                        )}`}
                    >
                        {process.env.REACT_APP_PHONE}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;

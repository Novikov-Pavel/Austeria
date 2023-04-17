import React, {useState} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import brands from "../assets/img/Components/About/brands.svg";
import "../SCSS/Components/about.scss";
import { Link } from "react-router-dom";
import Modal from "../components/modal";
import CALLBACK from './../components/main/modalCallBack'

function About() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <Header />
            <div className="about">
                <h1 className="about__h1">
                    О КОМПАНИИ <span className="about__title">ALLERGYMASK</span>
                </h1>
                <p className="about__p">
                    AllergyMask – официальный представитель в России брендов
                    Respro (аллерго-маски) и AXE (аллерго-очки). Современные
                    решения всемирно известных производителей обеспечивают
                    надёжную защиту от вредного воздействия окружающей среды.
                    С 2016 года компания AllergyMask профессионально занимается
                    проблемами аллергиков. При этом мы твёрдо уверены:
                    в вопросах здоровья мелочей не бывает! Поэтому предлагаем
                    своим клиентам — большим и маленьким аллергикам — только
                    качественную, проверенную и безопасную продукцию. То,
                    что используем сами.
                </p>
                <img src={brands} alt={brands}></img>
            </div>
            <div className="contact">
                <h1 className="contact__h1">КАК С НАМИ СВЯЗАТЬСЯ</h1>
                <div className="contact__budni">
                    <h3 className="contact__h3">Будни (Пн-Пт)</h3>
                    <span className="contact__span">с 9.00 до 22.00</span>
                </div>
                <div className="contact__vihodnie">
                    <h3 className="contact__h3">выходные (сб-вс)</h3>
                    <span className="contact__span">с 9.00 до 22.00</span>
                </div>
                <div className="contact__call">
                    <Link to={`tel: +${process.env.REACT_APP_PHONE.replace(/\D+/gi,'')}`} 
                        className="contact__phone" >{process.env.REACT_APP_PHONE}</Link>
                    <span className="contact__text">Предварительный звонок обязателен!</span>
                </div>
            </div>
            <Footer setActive={setModalActive}/>
            <Modal active={modalActive} setActive={setModalActive}>
                <CALLBACK />
            </Modal>
        </>
    );
}

export default About;

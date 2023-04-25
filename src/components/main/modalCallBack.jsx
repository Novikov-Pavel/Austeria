import React from "react";
import '../../SCSS/Components/Modals/modalCallBack.scss'

let modalCallBack = () => {
    return (
        <div className="modalCallBack">
            <h2 className="modalCallBack__h2">ЗАКАЗАТЬ ЗВОНОК</h2>
            <form action="">
                <div className="modalCallBack__form">
                    <div className="modalCallBack__form__inputs">
                        <div className="modalCallBack__form__namePhone">
                            <p className="modalCallBack__form__p">Ваше имя*</p>
                            <input className="modalCallBack__form__text" type="text" placeholder="Имя" required />
                        </div>
                        <div className="modalCallBack__form__namePhone">
                            <p className="modalCallBack__form__p">Номер телефона*</p>
                            <input className="modalCallBack__form__text" type="tel" placeholder="+7 (999) 000 00 00" required />
                        </div>
                    </div>
                    <div className="modalCallBack__form__textAria">
                        <p className="modalCallBack__form__p">Дополнительная информация</p>
                        <textarea className="modalCallBack__form__text" name="" cols="30" rows="7" placeholder="Введите ваше сообщение"></textarea>
                    </div>
                </div>
                <div className="modalCallBack__formConf">
                    <div className="modalCallBack__formConf__conf">
                       <input className="modalCallBack__formConf__checkBox" type="checkbox" name="checkConf" id="checkConf" required />
                       <label htmlFor="checkConf" className="modalCallBack__formConf__span">Соглашаюсь с офертой и политикой конфиденциальности</label>
                    </div>
                    <button className="modalCallBack__formConf__button" type="submit">ЗАКАЗАТЬ</button>
                </div>                
            </form>
        </div>
    );
};
export default modalCallBack;

import React from "react";
import './Promo.css';
import promoImg from '../../images/promo__logo.svg'

function Promo() {
    return(
        <section className="promo">
            <div className="promo__content">
                <div className="promo__info">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                </div>
                <img className="promo__img" src={promoImg} alt="Картинка" />
            </div>
        </section>
    )
}

export default Promo;
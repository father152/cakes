import React from "react";
import "./home.css";
import logo from "../image/logo.png";
import logoadress from "../image/icon-adress.png";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt=""></img>
            <p>Солодка кава</p>
          </div>
          <div className="adress">
            <img src={logoadress} alt=""></img>
            <p>м. Полтава вул. Грабчака, 2</p>
          </div>
          <div className="button">
            <button className="registr">Реєстрація</button>
            <button className="in">Вхід</button>
          </div>
        </div>
        <div className="begin">
          <button className="lux">Найвкусніші вироби</button>
          <h1>
            Тістечка та капкейки від 15 грн./шт. з доставкою по м. Полтава
          </h1>
          <p>
            Приготуємо за 1 годину у день замовлення. Доставка на авто в
            холодильнику.
          </p>
          <div className='catalog'>
            <button className='button-catalog'>До каталогу</button>
            <p>Безліч найкрутіших виробів</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Home };

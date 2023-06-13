import React from "react";
import ButtonCustom from "../../components/button";
import "./index.css";

export const Main = () => {
    //Creacion de componente
    //el export sirve para que pueda ser importad en la pagina web
    return (
        <div className="contenedor">
            <p>Esto es una mierda</p>
            <ButtonCustom></ButtonCustom>
        </div>
    );
};

import React from "react";

const styles = {
    /* creacion de un objeto nuevo */
    width: 120,
    heght: 32,
    backgroundColor: "blue",
};

const ButtonCustom = (props) => {
    return (
        <div>
            {/*el style que esta dentro de los corchetes llama al objeto de arriba con todas esas propiedades*/}
            <button style={styles}>{props.label}BOTON</button>
        </div>
    );
};

export default ButtonCustom;

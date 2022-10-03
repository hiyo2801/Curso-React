import React from "react";
import '../ItemListContainer/ItemListContainer.css';


export const ItemListContainer = ({ greeting, hS, mN }) => {
    return (
        <h2> Faltan {greeting} dias, {hS} horas, {mN} minutos para nuestra inauguración </h2>
    )
};

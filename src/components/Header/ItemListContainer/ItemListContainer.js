import React from "react";
import '../ItemListContainer/ItemListContainer.css';


export const ItemListContainer = ({ dias, hS, mN }) => {
    return (
        <h2> Faltan {dias} dias, {hS} horas, {mN} minutos para nuestra inauguración </h2>
    )
};

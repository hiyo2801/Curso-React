import React from "react";
import Navbar from "./components/Header/Navbar";
import { ItemListContainer } from "./components/Header/ItemListContainer/ItemListContainer";
import { CartWidget } from "./components/Header/CartWidget/CartWidget";

const App = () => {
  const diasIn = '365'
  const horas = '23'
  const minutos = '59'
  return (
    <>
      <Navbar>
      <CartWidget/>
      </Navbar>
      <ItemListContainer dias={diasIn} hS ={horas} mN={minutos} />
    </>
  );
};

export default App;
import React from "react";
import mday1 from '../../assets/mday1.jpg'
import './Navbar.css';

const Navbar = ({ children }) => {
    return (
        <header>
            <img src={mday1} alt="" />
            <h1>MayDay Tatoo</h1>
            <nav>
                <a href="">Trabajos</a>
                <a href="">Insumos</a>
                <a href="">Cremas</a>
                <a href="">Redes</a>
            </nav>
            { children }
        </header>
    )
}
export default Navbar;
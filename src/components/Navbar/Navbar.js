import React from "react";
import logo from "../../assets/mday1.jpg";
import { CartWidget } from "../CartWidget/CartWidget";
import './Navbar.scss';
//import { styles } from "./Navbar.style";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const categorias = [
    { nombre: "electronics", id: 0, ruta: "/categoria/electronics" },
    { nombre: "jewelery", id: 1, ruta: "/categoria/jewelery" },
    { nombre: "men's clothing", id: 2, ruta: "/categoria/men's clothing" },
    { nombre: "women's clothing", id: 3, ruta: "/categoria/women's clothing" },
    ];

    return (
    <header className="navbar-items">
        <nav className="navbar-items">
            <Link to="/" className="navbar-logo">
                <img className="logo" src={logo} alt="tienda online" />
            </Link>
        <h1>Proyecto Pae PDV</h1>
            <ul className="nav-menu">
            {categorias.map((categoria) => {
            return (
            <NavLink className="nav-link" key={categoria.id} to={categoria.ruta} >
                {categoria.nombre}
            </NavLink>
            );
        })}
        </ul>
        </nav>

        <Link to="/cart">
        <CartWidget />
        </Link>
    </header>
    );
};

export default Navbar;
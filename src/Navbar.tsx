import React from "react";
import "./index.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">elytse</a>
            </div>
            <ul className="navbar-menu">
                <li className="dropdown">
                    <a href="#">Men</a>
                    <div className="dropdown-content">
                        <a href="/men/tops">Tops</a>
                        <a href="/men/bottoms">Bottoms</a>
                        <a href="/men/shoes">Footwears</a>
                        <a href="/men/accessories">Accessories</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#">Women</a>
                    <div className="dropdown-content">
                        <a href="/women/tops">Tops</a>
                        <a href="/women/bottoms">Bottoms</a>
                        <a href="/women/shoes">Footwears</a>
                        <a href="/women/accessories">Accessories</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#">Kids</a>
                    <div className="dropdown-content">
                        <a href="/kids/tops">Tops</a>
                        <a href="/kids/bottoms">Bottoms</a>
                        <a href="/kids/shoes">Footwears</a>
                        <a href="/kids/accessories">Accessories</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="#">Accessories</a>
                    <div className="dropdown-content">
                        <a href="/accessories/bags">Bags</a>
                        <a href="/accessories/jewelry">Jewelry</a>
                        <a href="/accessories/hats">Hats</a>
                        <a href="/accessories/scarves">Scarves</a>
                    </div>
                </li>
                <li><a href="/new-arrivals">New Arrivals</a></li>
                <li><a href="/best-sellers">Best Sellers</a></li>
                <li><a href="/sale">Sale</a></li>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search for products..." />
            </div>
            <div className="navbar-icons">
                <a href="/account">My Account</a>
                <a href="/wishlist">Wishlist ♥</a>
                <a href="/cart">🛒 (2)</a>
            </div>
        </nav>
    );
}

export default Navbar;
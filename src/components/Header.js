import React from 'react';
import '../App.css';
import logo from '../images/online-shopping.svg';

const Header = () => {
    return (
        <div>
            <nav className="header">
                <img src={logo} alt="" />
                <a href="order">Order</a>
                <a href="order-review">Order Review</a>
                <a href="manage-inventory">Manage Inventory</a>
                <a href="login">Log In</a>
            </nav>
        </div>
    );
};

export default Header;
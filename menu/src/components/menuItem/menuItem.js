import React from 'react';
import PropTypes from 'prop-types';
import './menuItem.css';

function MenuItem(props) {
    return (
        <article className="menu-item">
            <img src={props.img} alt="menu item" className="photo" />
            <div className="item-info">
                <header>
                    <h4>{props.title}</h4>
                    <h4 className="price">{props.price}</h4>
                </header>
                <p className="item-text">{props.desc}</p>
            </div>
        </article>
    );
}

MenuItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
};
export default MenuItem;

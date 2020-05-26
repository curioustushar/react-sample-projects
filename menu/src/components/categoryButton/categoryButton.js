import React from 'react';
import PropTypes from 'prop-types';
import './categoryButton.css';

function CategoryButton(props) {
    return (
        <button
            type="button"
            className={`filter-btn ${props.active ? 'active' : ''}`}
            data-id={props.category}
            onClick={() => props.onClickFilter(props.category)}
        >
            {props.category}
        </button>
    );
}

CategoryButton.propTypes = {
    category: PropTypes.string.isRequired,
    onClickFilter: PropTypes.func.isRequired,
};
export default CategoryButton;

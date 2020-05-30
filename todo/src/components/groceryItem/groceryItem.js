import React from 'react';
import PropTypes from 'prop-types';

function GroceryList(props) {
    return (
        <div className="grocery-list">
            <article className="grocery-item">
                <p className="title">{props.item}</p>
                <div className="btn-container">
                    <button
                        type="button"
                        className="edit-btn"
                        onClick={() => props.edit(props.id)}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <button
                        type="button"
                        className="delete-btn"
                        onClick={() => props.delete(props.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </article>
        </div>
    );
}

GroceryList.propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    edit: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
};

export default GroceryList;

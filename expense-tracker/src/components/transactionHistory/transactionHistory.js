import React from 'react';
import PropTypes from 'prop-types';
import './transactionHistory.css';
import formatNumber from '../../utils/currency';

const TransactionHistory = (props) => {
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {props.transactions.map((transaction, i) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? 'minus' : 'plus'}
          >
            {transaction.label}
            <span>
              {transaction.amount < 0 ? '-' : '+'}
              {formatNumber(Math.abs(transaction.amount))}
            </span>
            <button
              className="delete-btn"
              onClick={(e) => props.removeTransactionHandler(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
  removeTransactionHandler: PropTypes.func.isRequired,
};

export default TransactionHistory;

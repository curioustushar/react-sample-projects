import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './addTransaction.css';

const AddTransaction = (props) => {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');

  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  function addTransactionHandler(e) {
    e.preventDefault();

    const newTransaction = {
      id: generateID(),
      label,
      amount: +amount,
    };

    const newTransactions = [...props.transactions, newTransaction];

    props.updateTransactionHandler(newTransactions);

    setLabel('');
    setAmount('');
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={addTransactionHandler}>
        <div className="form-control">
          <label htmlFor="text">Label</label>
          <input
            type="text"
            maxLength="10"
            required
            value={label}
            onChange={(e) => setLabel(e.target.value.trim())}
            placeholder="Enter label..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            max="9999"
            min="-9999"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

AddTransaction.propTypes = {
  transactions: PropTypes.array.isRequired,
  updateTransactionHandler: PropTypes.func.isRequired,
};

export default AddTransaction;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './totalBalance.css';
import formatNumber from '../../utils/currency';

const TotalBalance = (props) => {
  const [balance, setBalance] = useState({
    total: 0,
    credit: 0,
    debit: 0,
  });

  useEffect(() => {
    const updateBalance = () => {
      const amounts = props.transactions.map(
        (transaction) => transaction.amount
      );
      const newBalance = {
        total: 0,
        credit: 0,
        debit: 0,
      };

      newBalance.total = amounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

      newBalance.credit = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

      newBalance.debit = (
        amounts
          .filter((item) => item < 0)
          .reduce((acc, item) => (acc += item), 0) * -1
      ).toFixed(2);

      setBalance({
        total: formatNumber(newBalance.total),
        credit: formatNumber(newBalance.credit),
        debit: formatNumber(newBalance.debit),
      });
    };
    updateBalance();
  }, [props.transactions]);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balremoveTransactionance">{balance.total}</h1>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            {balance.credit}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            {balance.debit}
          </p>
        </div>
      </div>
    </div>
  );
};

TotalBalance.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TotalBalance;

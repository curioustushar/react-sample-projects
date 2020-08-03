import React, { useState } from 'react';
import './App.css';
import expenses from './utils/expenses';
import TransactionHistory from './components/transactionHistory/transactionHistory';
import TotalBalance from './components/totalBalance/totalBalance';
import AddTransaction from './components/addTransaction/addTransaction';

function App() {
  const [transactions, setTransactions] = useState(expenses.get());

  function updateTransactionHandler(transactions) {
    expenses.update(transactions);
    setTransactions(expenses.get());
  }

  // Remove transaction by ID
  function removeTransactionHandler(id) {
    const newTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    updateTransactionHandler(newTransactions);
  }

  return (
    <div className="App">
      <h2>Expense Tracker</h2>

      <div className="container left">
        <TotalBalance transactions={transactions} />

        <AddTransaction
          transactions={transactions}
          updateTransactionHandler={updateTransactionHandler}
        />
      </div>
      <div className="container right">
        <TransactionHistory
          transactions={transactions}
          removeTransactionHandler={removeTransactionHandler}
        />
      </div>
    </div>
  );
}

export default App;

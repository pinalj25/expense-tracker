import React, { useState } from 'react';
import './Header.css';
import AddTransaction from './AddTransaction';
import TranscationList from './TranscationList';

export default function Balance() {
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  const updateIncome = (amount) => {
    setIncome((prevIncome) => prevIncome + amount);
  };

  const updateExpense = (amount) => {
    setExpense((prevExpense) => prevExpense + amount);
  };

  const addTransaction = (transactionData) => {
    // Handle adding the transaction data (you can implement this logic as needed)
    console.log('Adding transaction:', transactionData);

    // Update the transactions state
    setTransactions((prevTransactions) => [...prevTransactions, transactionData]);

    // Close the modal after handling the transaction
    setShowAddTransaction(false);
  };
  const deleteTransaction = (index) => {
    // Handle deleting the transaction at the specified index
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  const editTransaction = (data) => {
    
    const updatedTransactions = [...transactions];
    updatedTransactions[data.index] = data.data;
    setTransactions(updatedTransactions);
  };


  return (
    <>
      <div className='balance'>
        <div className='card1'>
          <h4>Your Balance</h4>
          <h1 h1 id='balance'>₹{(income - expense).toLocaleString()}</h1>
        </div>
        <div className='card2'>
          <button className='btn' onClick={() => setShowAddTransaction(true)}>
            Add
          </button>
        </div>
      </div>

      <TranscationList transactions={transactions}
       onDelete={deleteTransaction}
       

       onEdit={(index) => {
        // Set the transaction to be edited and open the modal
        setTransactionToEdit({ ...transactions[index], index });
        setShowAddTransaction(true);
      }}
/>

{showAddTransaction && (
        <AddTransaction
          isVisible={showAddTransaction}
          onClose={() => {
            setShowAddTransaction(false);
            setTransactionToEdit(null); // Reset transactionToEdit when closing the modal
          }}
          addTransaction={addTransaction}
          editTransaction={editTransaction}
          transactionToEdit={transactionToEdit}
        />
      )}
    
    </>
  );
}

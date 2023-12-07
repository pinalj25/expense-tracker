import React, { useState } from 'react';
import './balance.css'

export default function TransactionList({ transactions, onDelete, onEdit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((transaction) =>
    Object.values(transaction).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <h2>Transaction List</h2>
      <input
        type="text"
        placeholder="Search by date, category, type, amount, or details..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Details</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.category}</td>
              <td>{transaction.transactionType}</td>
              <td>₹{transaction.amount}</td>
              <td>{transaction.details}</td>
              <td>  <button style={{color: "green",border:"none", fontSize:"20%"} } onClick={() => onEdit(index)}><i class="fa-regular fa-pen-to-square"  ></i></button></td>
              <td>
                <button style={{color: "red",border:"none", fontSize:"50%"} } onClick={() => onDelete(index)}><i class="fa-solid fa-trash"></i></button>
              
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

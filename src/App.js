import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpense from './Components/IncomeExpense.js';
import TranscationList from './Components/TranscationList.js';
import AddTransaction from './Components/AddTransaction.js';
import React,{useState} from 'react';
function App() {
  const [transcations, setTransactions] = useState([]);
  const addTransaction = (newTransaction) => {
    // Update the transactions array with the new transaction
    setTransactions([...transcations, newTransaction]);
  };

  return (
   <>

   {/* <Login/> */}
   <Header/>
   <div className=' container'>
    
    <IncomeExpense/>
    <Balance/>
    <AddTransaction  addTransaction={ addTransaction}   />
   </div>
   </>
  );
}

export default App;

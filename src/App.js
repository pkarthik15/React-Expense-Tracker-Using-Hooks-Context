import React from 'react';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import {History} from './components/History'
import {AddTransaction} from  './components/AddTransaction'


import {GlobalProvider} from './context/GlobalState'



import './App.css';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <History />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;

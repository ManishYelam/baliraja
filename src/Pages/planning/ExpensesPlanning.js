import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Head from '../../Components/Head/Head';
import ExpenseTable from '../../Components/Table/ExpenseTable';

const ExpensesPlanning = () => {
  return (
    <div>
      <Navbar />
      <Head />
      <main className="container mt-4">
       <ExpenseTable />
       
      </main>
    </div>
  );
};

export default ExpensesPlanning;

import React from 'react';
import PreparationTable from '../../Components/Table/PreparationTable';
import Head from '../../Components/Head/Head';
import Navbar from '../../Components/Navbar/Navbar';

const PreparationPlanning = () => {
  return (
    <div>
      <h1>मशागत नियोजन नोंदी</h1>
      <Navbar />
      <Head />
      <main className="container mt-4">
        <PreparationTable />
      </main>
    </div>
  );
};

export default PreparationPlanning;

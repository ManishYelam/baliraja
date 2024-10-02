import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Head from '../../Components/Head/Head';
import FertilizerTable from '../../Components/Table/FertilizerTable';

const FertilizerPlanning = () => {
  return (
    <div>
      <h1>खते नियोजन</h1>
      <Navbar />
      <Head />
      <main className="container mt-4">
        <FertilizerTable />
      </main>
    
    </div>
  );
};

export default FertilizerPlanning;

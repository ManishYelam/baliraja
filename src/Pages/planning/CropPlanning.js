// src/pages/CropPlanning.js
import React from 'react';
import Head from '../../Components/Head/Head';
import Navbar from '../../Components/Navbar/Navbar';
import CropTable from '../../Components/Table/CropTable';


const CropPlanning = () => {
  return (
    <div className="crop-planning">
      <Navbar />
      <Head />
      <main className="container mt-4">
        <CropTable />
      </main>
    </div>
  );
};

export default CropPlanning;

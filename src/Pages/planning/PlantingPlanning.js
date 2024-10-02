import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Head from '../../Components/Head/Head';
import PlantingTable from '../../Components/Table/PlantingTable';

const PlantingPlanning = () => {
  return (
    <div>
      <h1>पीक लागड नियोजन</h1>
      <Navbar />
      <Head />
      <main className="container mt-4">
        <PlantingTable />
      </main>
    </div>
  );
};

export default PlantingPlanning;

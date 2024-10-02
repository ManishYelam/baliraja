import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Head from '../../Components/Head/Head';
import WaterPlanningTable from '../../Components/Table/WaterPlanningTable';

const WaterPlanning = () => {
  return (
    <div>
      <h1>पाण्याचे नियोज</h1>
      <Navbar />
      <Head />
      <main className="container mt-4">
        <WaterPlanningTable />
      </main>
    </div>
  );
};

export default WaterPlanning;

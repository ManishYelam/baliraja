import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Head from '../../Components/Head/Head';
import ToolsPlanningTable from '../../Components/Table/ToolsPlanningTable';

const ToolsPlanning = () => {
  return (
    <div>
      <h1>अवजारे नियोजन</h1>
      <Navbar />
      <Head />
      <main className="container mt-4">
        <ToolsPlanningTable />
      </main>
    </div>
  );
};

export default ToolsPlanning;

import React from 'react';
import Head from '../../Components/Head/Head';
import Navbar from '../../Components/Navbar/Navbar';
import WorkforceTable from '../../Components/Table/WorkforceTable';

const WorkforcePlanning = () => {
  return (
    <div>
      <h1>मनुष्यबळ नियोजन</h1>
      <Navbar />
      <Head />
      <main className="container mt-4">
        <WorkforceTable />
      </main>
    </div>
  );
};

export default WorkforcePlanning;

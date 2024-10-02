// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';

// Import page components for each route
import Dashboard from './Pages/Dashboard/Dashboard';
import CropPlanning from './Pages/planning/CropPlanning';
import PlantingPlanning from './Pages/planning/PlantingPlanning';
import WorkforcePlanning from './Pages/planning/WorkforcePlanning';
import FertilizerPlanning from './Pages/planning/FertilizerPlanning';
import ToolsPlanning from './Pages/planning/ToolsPlanning';
import PreparationPlanning from './Pages/planning/PreparationPlanning';
import ExpensesPlanning from './Pages/planning/ExpensesPlanning';
import WaterPlanning from './Pages/planning/WaterPlanning';

import ImplementationExpenses from './Pages/implementation/ImplementationExpenses';
import PlantingImplementation from './Pages/implementation/PlantingImplementation';
import WaterSupply from './Pages/implementation/WaterSupply';
import Weeding from './Pages/implementation/Weeding';
import Spraying from './Pages/implementation/Spraying';

import ProductionExpenses from './Pages/production/ProductionExpenses';
import TotalBalance from './Pages/production/TotalBalance';
import IncomeRecording from './Pages/production/IncomeRecording';

import LivestockRegistration from './Pages/livestock/LivestockRegistration';
import LivestockDailyRecords from './Pages/livestock/LivestockDailyRecords';
import LivestockExpenses from './Pages/livestock/LivestockExpenses';

import PoultryRegistration from './Pages/poultry/PoultryRegistration';
import PoultryDailyRecords from './Pages/poultry/PoultryDailyRecords';
import PoultryExpenses from './Pages/poultry/PoultryExpenses';

import GoatFarmingRecords from './Pages/goat-farming/GoatFarmingRecords';
import GoatDailyRecords from './Pages/goat-farming/GoatDailyRecords';
import GoatExpenses from './Pages/goat-farming/GoatExpenses';

import StorageRecords from './Pages/storage/StorageRecords';
import StorageDailyRecords from './Pages/storage/StorageDailyRecords';
import StorageExpenses from './Pages/storage/StorageExpenses';

import FrontendOption1 from './Pages/frontend-settings/FrontendOption1';
import FrontendOption2 from './Pages/frontend-settings/FrontendOption2';
import FrontendOption3 from './Pages/frontend-settings/FrontendOption3';
import Login from './Pages/Login/Login';

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="content p-4">
          <Routes>
            <Route path='/' element={<Login />} />
            {/* Dashboard Route */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Planning Routes */}
            <Route path="/planning/crop" element={<CropPlanning />} />
            <Route path="/planning/planting" element={<PlantingPlanning />} />
            <Route path="/planning/workforce" element={<WorkforcePlanning />} />
            <Route path="/planning/fertilizers" element={<FertilizerPlanning />} />
            <Route path="/planning/tools" element={<ToolsPlanning />} />
            <Route path="/planning/preparation" element={<PreparationPlanning />} />
            <Route path="/planning/expenses" element={<ExpensesPlanning />} />
            <Route path="/planning/water" element={<WaterPlanning />} />

            {/* Implementation Routes */}
            <Route path="/implementation/expenses" element={<ImplementationExpenses />} />
            <Route path="/implementation/planting" element={<PlantingImplementation />} />
            <Route path="/implementation/water-supply" element={<WaterSupply />} />
            <Route path="/implementation/weeding" element={<Weeding />} />
            <Route path="/implementation/spraying" element={<Spraying />} />

            {/* Production Routes */}
            <Route path="/production/expenses" element={<ProductionExpenses />} />
            <Route path="/production/balance" element={<TotalBalance />} />
            <Route path="/production/income" element={<IncomeRecording />} />

            {/* Livestock Routes */}
            <Route path="/livestock/registration" element={<LivestockRegistration />} />
            <Route path="/livestock/daily-records" element={<LivestockDailyRecords />} />
            <Route path="/livestock/expenses" element={<LivestockExpenses />} />

            {/* Poultry Routes */}
            <Route path="/poultry/registration" element={<PoultryRegistration />} />
            <Route path="/poultry/daily-records" element={<PoultryDailyRecords />} />
            <Route path="/poultry/expenses" element={<PoultryExpenses />} />

            {/* Goat Farming Routes */}
            <Route path="/goat-farming/records" element={<GoatFarmingRecords />} />
            <Route path="/goat-farming/daily-records" element={<GoatDailyRecords />} />
            <Route path="/goat-farming/expenses" element={<GoatExpenses />} />

            {/* Storage Routes */}
            <Route path="/storage/records" element={<StorageRecords />} />
            <Route path="/storage/daily-records" element={<StorageDailyRecords />} />
            <Route path="/storage/expenses" element={<StorageExpenses />} />

            {/* Frontend Settings Routes */}
            <Route path="/frontend-settings/option1" element={<FrontendOption1 />} />
            <Route path="/frontend-settings/option2" element={<FrontendOption2 />} />
            <Route path="/frontend-settings/option3" element={<FrontendOption3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

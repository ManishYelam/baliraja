// src/components/WaterPlanningTable.js
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Table.css'

const WaterPlanningTable = () => {
  // Sample data for the table
  const data = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    waterSource: `पाणी स्रोत ${i + 1}`, // पाणी स्रोत
    electricDevice: `इलेक्ट्रिक डिवाइस ${i + 1}`, // इलेक्ट्रिक डिवाइस
    pipe: `घड़ी पाईप ${i + 1}`, // घड़ी पाईप
    dripType: `ठिबक प्रकार ${i + 1}`, // ठिबक प्रकार
    filter: `पिटर ${i + 1}`, // पिटर
    otherExpense: `${(i + 1) * 500} रुपये`, // इतर खर्च
    image: `प्रतिमा ${i + 1}`, // प्रतिमा
  }));

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const filteredData = data.filter(item =>
    item.waterSource.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      alert(`Deleted item with id: ${id}`);
    }
  };

  return (
    <div className="container mt-6">
      {/* Row and entries display */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          Showing {currentItems.length} of {filteredData.length} entries
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="form-control w-25"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table with fixed width */}
      <div style={{ overflowX: 'auto' }}> {/* Add scroll if content overflows */}
        <table
          className="table table-bordered table-hover shadow-sm"
          style={{ width: '1000px', maxWidth: '1000px' }} // Fixed table width
        >
          <thead className="table-light">
            <tr>
              <th className="text-center" >क्रमांक</th>
              <th className="text-center" >पाणी स्रोत</th>
              <th className="text-center" >इलेक्ट्रिक डिवाइस</th>
              <th className="text-center" >घड़ी पाईप</th>
              <th className="text-center" >ठिबक प्रकार</th>
              <th className="text-center" >पिटर</th>
              <th className="text-center" >इतर खर्च</th>
              <th className="text-center" >प्रतिमा</th>
              <th className="text-center" >एडिट / डिलीट</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td style={{ fontSize: '0.85rem'}} className="text-center">{item.id}</td>
                <td style={{ fontSize: '0.85rem'}}>{item.waterSource}</td>
                <td style={{ fontSize: '0.85rem'}}>{item.electricDevice}</td>
                <td style={{ fontSize: '0.85rem'}}>{item.pipe}</td>
                <td style={{ fontSize: '0.85rem'}}>{item.dripType}</td>
                <td style={{ fontSize: '0.85rem'}}>{item.filter}</td>
                <td style={{ fontSize: '0.85rem'}}>{item.otherExpense}</td>
                <td style={{ fontSize: '0.85rem'}}>{item.image}</td>
                <td style={{ fontSize: '0.85rem'}} className="text-center">
                  <button
                    className="btn btn-primary me-2"
                    style={{
                      padding: '0.1rem 0.2rem',
                      fontSize: '0.65rem',
                      lineHeight: '1.5',
                      minWidth: '25px',
                    }}
                    title="Edit"
                  >
                    <FontAwesomeIcon icon={faEdit} /> {/* Edit Icon */}
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{
                      padding: '0.1rem 0.2rem',
                      fontSize: '0.65rem',
                      lineHeight: '1.5',
                      minWidth: '25px',
                    }}
                    title="Delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> {/* Delete Icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          shape="rounded"
          size="large" // Optional: Change size of pagination buttons
        />
      </Stack>
    </div>
  );
};

export default WaterPlanningTable;

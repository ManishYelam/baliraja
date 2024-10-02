// src/components/CropTable.js
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Table.css'

const CropTable = () => {
  // Sample data for the table
  const data = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    cropName: `पिक ${i + 1}`, // Crop Name
    cropType: `प्रकार ${i + 1}`, // Crop Type
    season: `हंगाम ${i + 1}`, // Season
    variety: `वाण ${i + 1}`, // Variety
    area: `${(i + 1) * 10} हेक्टर्स`, // Area
    cost: `${(i + 1) * 1000} रुपये`, // Cost
    date: `2024-09-${i + 1}`, // Date
    duration: `${(i + 1) * 5} दिवस`, // Duration
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
    item.cropName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      alert(`Deleted item with id: ${id}`);
    }
  };

  return (
    <div className="container mt-4">
      {/* Row and entries display */}
      <div className="d-flex justify-content-between align-items-center mb-3" style={{ maxWidth: '1200px' }}>
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

      <table className="table table-bordered table-hover shadow-sm"
          style={{ width: '1000px', maxWidth: '1000px' }} >
        <thead className="table-light">
          <tr>
            <th className="text-center">क्रमांक</th>
            <th className="text-center">पिकाचे नाव</th>
            <th className="text-center">पिकाचा प्रकार</th>
            <th className="text-center">हंगाम</th>
            <th className="text-center">पिकाचे वाण</th>
            <th className="text-center">लागवडीचे क्षेत्र</th>
            <th className="text-center">खर्च</th>
            <th className="text-center">तारीख</th>
            <th className="text-center">नियोजन कालावधी</th>
            <th className="text-center">क्रिया</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="text-center">{item.id}</td>
              <td>{item.cropName}</td>
              <td>{item.cropType}</td>
              <td>{item.season}</td>
              <td>{item.variety}</td>
              <td>{item.area}</td>
              <td>{item.cost}</td>
              <td>{item.date}</td>
              <td>{item.duration}</td>
              <td className="text-center">
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

export default CropTable;

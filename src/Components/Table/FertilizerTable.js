// src/components/FertilizerTable.js
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Table.css'

const FertilizerTable = () => {
  // Sample data for the table
  const data = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    fertilizerName: `खत ${i + 1}`,
    quantity: `${(i + 1) * 10} किलो`,
    unit: 'किलो',
    material: `सामग्री ${i + 1}`,
    requiredQuantity: `${(i + 1) * 5} टन`,
    mixing: `मिसळणे ${i + 1}`,
    area: `${(i + 1) * 2} हेक्टर्स`,
    spraying: `फवरणी ${i + 1}`,
    mixingWith: `इतर खत ${i + 1}`,
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
    item.fertilizerName.toLowerCase().includes(searchTerm.toLowerCase())
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

      <table className="table table-bordered table-hover shadow-sm" style={{ width: '100%', maxWidth: '1200px' }}>
        <thead className="table-light">
          <tr>
            <th className="text-center fs-6">Sr.No</th>
            <th className="text-center fs-6">नाथ</th>
            <th className="text-center fs-6">प्रमाण</th>
            <th className="text-center fs-6">पुनिट</th>
            <th className="text-center fs-6">सामग्री</th>
            <th className="text-center fs-6">आवश्यक प्रमाण</th>
            <th className="text-center fs-6">मिसळणे</th>
            <th className="text-center fs-6">11 क्षेत्र</th>
            <th className="text-center fs-6">फवरणी</th>
            <th className="text-center fs-6">मिश्रण (इतर कोणत्या खताबरोबर)</th>
            <th className="text-center fs-6">अॅक्शन</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="fs-7">
              <td className="text-center">{item.id}</td>
              <td>{item.fertilizerName}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.material}</td>
              <td>{item.requiredQuantity}</td>
              <td>{item.mixing}</td>
              <td>{item.area}</td>
              <td>{item.spraying}</td>
              <td>{item.mixingWith}</td>
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

export default FertilizerTable;

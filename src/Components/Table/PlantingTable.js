// src/components/PlantingTable.js
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Table.css'

const PlantingTable = () => {
  // Sample data for the table
  const data = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    toolName: `अवजारे ${i + 1}`, // अवजारे
    area: `${(i + 1) * 10} हेक्टर्स`, // क्षेत्र
    duration: `${(i + 1) * 5} दिवस`, // कालावधी
    cost: `${(i + 1) * 1000} रुपये`, // मशागतीचा खर्च
    repetition: `${i + 1} वेळा`, // पुनरावृत्ती
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
    item.toolName.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div style={{ overflowX: 'auto' }}>
        <table
          className="table table-bordered table-hover shadow-sm"
          style={{ width: '1000px', maxWidth: '1000px' }} // Fixed table width
        >
          <thead className="table-light">
            <tr>
              <th className="text-center" >क्रमांक</th>
              <th className="text-center" >अवजारे</th>
              <th className="text-center" >क्षेत्र</th>
              <th className="text-center" >कालावधी</th>
              <th className="text-center" >मशागतीचा खर्च</th>
              <th className="text-center" >पुनरावृत्ती</th>
              <th className="text-center" >प्रतिमा</th>
              <th className="text-center" >एडिट / डिलीट</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.id}</td>
                <td>{item.toolName}</td>
                <td>{item.area}</td>
                <td>{item.duration}</td>
                <td>{item.cost}</td>
                <td>{item.repetition}</td>
                <td className="text-center">
                  <img
                    src={`https://via.placeholder.com/50x50?text=${item.id}`}
                    alt={`Planting ${item.id}`}
                    style={{ width: '50px', height: '50px' }}
                  />
                </td>
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

export default PlantingTable;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faFilter, faAdd } from '@fortawesome/free-solid-svg-icons';

const Head = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center p-3 bg-light" style={{ width: '98%', maxWidth: '1000px', margin: '11px' }}>
        <h4 className="me-3">पिकाचे नियोजन नोंदी</h4>
        <div className="d-flex heads">
          <button className="btn btn-outline-secondary me-2">
            <FontAwesomeIcon icon={faSync} /> 
          </button>
          <button className="btn btn-outline-secondary me-2">
            <FontAwesomeIcon icon={faFilter} /> 
          </button>
          <button className="btn btn-outline-secondary">
            <FontAwesomeIcon icon={faAdd} /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;

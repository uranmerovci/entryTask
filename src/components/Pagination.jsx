/* eslint-disable react/prop-types */
import React from 'react';

const Pagination = ({
  totalEntries, entriesPerPage, paginate, entriesfiltered,
}) => {
  const pageNumbers = [];
  const entries = entriesfiltered ? entriesfiltered.length : totalEntries;

  for (let i = 1; i <= Math.ceil(entries / entriesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="row justify-content-center mt-4">
      <ul className="pagination">
        {
          pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                type="button"
                className="btn-link btn-anchor page-link"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Pagination;

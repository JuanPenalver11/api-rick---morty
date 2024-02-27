import React from "react"; 
import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, info }) => {

  const prev = () => {
    setPageNumber((prev) => {
      if (prev <= 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  };

  const next = () => {
    setPageNumber((prev) => prev + 1);
  };



  return (
    <div className="container">
      <button className="btn" onClick={prev}>
        Prev
      </button>
  
      <button className="btn" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

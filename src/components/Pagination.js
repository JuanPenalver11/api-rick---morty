import React from "react"; 
import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, info, pageNumber }) => {

  return (
  
  <ReactPaginate
  pageCount ={info?.pages}
  pageRangeDisplayed = '1'
  className = 'pagination justify-content-center my-4 gap-4'
  previousLabel = 'Prev'
  previousClassName="btn btn-secondary"
  nextLabel = 'Next'
  nextClassName="btn btn-warning"
  pageClassName="page-item"
  pageLinkClassName= "page-link"
  activeClassName = "active"
  onPageChange={(data)=>setPageNumber(data.selected + 1)}
  forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
  />    


  );
};

export default Pagination;

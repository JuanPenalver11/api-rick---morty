import React from "react"; 
import ReactPaginate from "react-paginate";
//ReactPaginate is library from react-paginate 

const Pagination = ({ setPageNumber, info, pageNumber }) => {
//we obtain setPageNumber, pageNumber and info from main.js
  return (
  
  <ReactPaginate
  pageCount ={info?.pages}
  // Page count refers to the amount of pages that will be display. 
  pageRangeDisplayed = '3'
  // Number of pages that will be display. 3 is the min.
  className = 'pagination justify-content-center my-4 gap-4'
  previousLabel = 'Prev'
  previousClassName="btn btn-secondary"
  nextLabel = 'Next'
  nextClassName="btn btn-warning"
  pageClassName="page-item"
  //refers to the anchor from pagination in bootstrap code 
  pageLinkClassName= "page-link"
  //refers to the link from pagination in bootstrap code 
  activeClassName = "active"
  //it will activate a page number when is click on 
  onPageChange={(data)=>setPageNumber(data.selected + 1)}
  //function that will render the data from the page we are at
  forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
  //it says to pagination from what page always it should start. 
  />    


  );
};

export default Pagination;

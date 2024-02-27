import React from 'react'

const Status = ({setPageNumber, handleStatus}) => {
  let status = ['Alive', 'Dead', 'Unknown']
  return (
    <div className="accordion-body">
    {status.map((state) => {
      return (
        <button
          onClick={() => {
            setPageNumber(1);
            handleStatus(state);
          }}
        >
          {state}
        </button>
      );
    })}
  </div>
  )
}

export default Status

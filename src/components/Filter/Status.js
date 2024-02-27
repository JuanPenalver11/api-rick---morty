import React from 'react'

const Status = ({setPageNumber, handleStatus}) => {
  let status = ['Alive', 'Dead', 'Unknown']
   // we have created an array of names 
  return (
    <div className="accordion-body">
    {status.map((state) => {
        // we want to map through that array and 
        // to create a button for each index. 
        // the button has an event Onclick that will trigger a handleStatus
        //that will modify setStatus with the gender stablish in the button. 
        // this will affect the url and the useEffect will he triggered rendering new information. 
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

import React from "react";
import { useLocation } from 'react-router-dom';

function Results() {

  const location = useLocation
  const data = location.state;

  return (
    <div>
      <h1>Results</h1>
      <p>{data}</p>
    </div>
  );
}

export default Results;

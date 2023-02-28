import React from "react";
import { useLocation } from 'react-router-dom';

function Results() {

  const location = useLocation
  const results = location.state?.results;

  return (
    <div>
      <h1>Results</h1>
      {results ? (
        <ul>
          {results.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default Results;

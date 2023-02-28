import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TryItOut() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:5000/analysisresults", {
          userinput: inputValue,
        })
        .then((response) => {
          // Handle the response from the server
          console.log(response.data);
        })
        .catch((error) => {
          // Handle errors that occur during the request
          console.error(error);
        });
      // request succeeded, navigate to results page
      navigate("/Results", { state: { results: response.data } });
    } catch (error) {
      // request failed, handle error
    }
  };

  const handleInputChange = (event) => {
    // Update the input value when the user types in the input field
    setInputValue(event.target.value);
  };

  return (
    <div className="tryitoutmain">
      <div>
        <h1>Try It Out Page</h1>
      </div>
      {/* input search bar */}
      <input
        type="text"
        placeholder="enter youtube link"
        value={inputValue} //the value passed
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>🔍 search</button>
    </div>
  );
}

export default TryItOut;

import React, { useState } from 'react'

function TryItOut() {

  const[searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
        e.preventDefaults()
        try{
          console.log('submitted', searchTerm)
        }catch(error){
          console.log(error)
        }
  }


  return (
    <div>
      TryItOut
      
      
      {/* add a searchcbar and a button temporary*/}

      <form onSubmit={handleChange} className='search-container'>
                {/* input search bar */}
                <input 
                    type="text"
                    id='ytlink'
                    name='ytlink'
                    placeholder="paste your link"
                    value={searchTerm} //the value passed
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input className='submitButton' type={"submit"} value="🔍 search"/> {/* search button */}
            
      </form>

      
      </div>
  )
}

export default TryItOut
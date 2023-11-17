import React, { useState } from "react";
const Authenticate = ({ token }) => {
const [error, setError] = useState(null);
 
    async function handleClick() {
        try {
              const fetchContactDetails = async () => { 
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate");
            const result = await response.json();
        
        } catch (error) {
            setError(error.message);
          }
        }
      
     return (
        <div>
        <h2>Authenticate!</h2>
        {error && <p>{error}</p>}
       <button onClick={handleClick}>Authenticate Token</button>
       </div>
          );
        };
  
  export default Authenticate;
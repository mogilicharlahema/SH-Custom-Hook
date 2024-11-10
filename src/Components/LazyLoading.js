import React, { useState, Suspense, lazy } from "react";
import { CircularProgress } from '@mui/material'; 
import "../Components/Loader.css";  

// Lazy loading the RegistrationForm component
const RegistrationForm = lazy(() => 
  new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/Form")), 3000);
  })
);

function LazyLoading() {
  const [showForm, setShowForm] = useState(false); 

  const handleStartRegistration = () => {
    setShowForm(true);  
  };

  return (
    <div className={`container ${showForm ? "no-background" : "background-image"}`}> 
      
      {!showForm && ( 
        <button 
          onClick={handleStartRegistration} 
          className="start-button"
        >
          Start Registration
        </button>
      )}
      
      {showForm && (  
        <Suspense fallback={
          <div className="loader-container">
            <CircularProgress style={{height:"80px",width:"80px"}} className="loader" />
          </div>
        }>
          <RegistrationForm />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoading;

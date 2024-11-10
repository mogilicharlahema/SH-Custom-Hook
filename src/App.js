import React from "react";
import LazyLoading from "./Components/LazyLoading";

function App() {
  return (
    <div className="App">
      {/* Only render LazyLoading */}
      <LazyLoading />
    </div>
  );
}

export default App;

// App.jsx
import React from "react";
import { ToastContainer } from "react-toastify";

import LandingPage from "./page/LendingPage";

const App = () => {
  return (
    <div className="App">
      <LandingPage />
<ToastContainer position="top-right" autoClose={3000} />
    </div>
    
  );
};

export default App;

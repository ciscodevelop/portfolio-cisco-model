import React from "react";
import { createRoot } from "react-dom/client"; 
import "animate.css";
import App from "./App"; 
import "./index.scss"; 
import   "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router,  } from "react-router-dom";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
     
      <Router>
        <App />
      </Router>
   
  </React.StrictMode>
);

 

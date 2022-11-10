import React from "react";
import GetCoordinates from "../GetCoordinates";
import './index.css';
import Card from "@material-ui/core/Card";


function App() {
  return (
    <div className = "title-card-container">
      <Card className = "title-card" style={{width:"fit-content", backgroundColor: "lightgrey"}}>
        <h1 className="project-title">
          This simple react project gets weather data when provided with a Zip Code!
        </h1>
      </Card>
    </div>
  );
};

export default App;

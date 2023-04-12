import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import { Link } from "react-router-dom";
import { Line, Pie } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import { NavLink } from 'react-router-dom';

// const [carData, setCarData] = useState({});
function App() {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [carspecs, setCarSpecs] = useState([]);

  useEffect(() => {
    axios
      .get('https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467', {
        headers: {
          'X-RapidAPI-Key': 'b39bb47b12msh533f56de3e4ac5cp1d5ad4jsn8d0673d2e32e',
          'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        },
      })
      .then((response) => {
        setMakes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fetchModels = async (makeId) => {
    const response = await axios.get(`https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467/makes/${makeId}/models`, {
      headers: {
        'X-RapidAPI-Key': 'b39bb47b12msh533f56de3e4ac5cp1d5ad4jsn8d0673d2e32e',
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
      },
    });
    setModels(response.data);
  };

  const fetchGenerations = async (modelId) => {
    const response = await axios.get(`https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467/models/${modelId}/generations`, {
      headers: {
        'X-RapidAPI-Key': 'b39bb47b12msh533f56de3e4ac5cp1d5ad4jsn8d0673d2e32e',
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
      },
    });
    setGenerations(response.data);
  };

  const fetchCarSpecs = async (trimsId) => {
    const response = await axios.get(`https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467/trims/${trimsId}`, {
      headers: {
        'X-RapidAPI-Key': 'b39bb47b12msh533f56de3e4ac5cp1d5ad4jsn8d0673d2e32e',
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
      },
    });
    setCarSpecs(response.data);
    console.log(carspecs);
  };

  // changes to api ID
  const handleMakeChange = (e) => {
    const makeId = e.target.value;
    fetchModels(makeId);
  };

  const handleModelChange = (e) => {
    const modelId = e.target.value;
    fetchGenerations(modelId);
  };

  const handleGenerationsChange = (e) => {
    const generationsId = e.target.value;  
  };

  const data = {
    labels: ['Highway', 'Mixed', 'City'],
    datasets: [{
      data: [       
        parseFloat(carspecs?.highwayFuelPer100KmL?.replace(",", ".")),
        parseFloat(carspecs?.mixedFuelConsumptionPer100KmL?.replace(",", ".")),
        parseFloat(carspecs?.cityFuelPer100KmL?.replace(",", "."))
      ],
      backgroundColor: [
        '#8FAADC',
        '#B4D4AA',
        '#FFD700 '
      ],
      hoverBackgroundColor: [
        '#A0522D',
        '#4B0082',
        '#00CED1 '
      ]
    }],
  };

  return (
    <div className="App">

      <nav className="topnav">
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/Compare" activeclassname="active">Compare</NavLink>
        <NavLink to="/Timeline" activeclassname="active">Timeline</NavLink>
      </nav>

      <div className="d-flex align-items-center justify-content-center">
        <div className="card2">
          <div className="card-body">
            <form className="row g-4 d-flex align-items-end">
              <div className="col-md-3">
                <label htmlFor="make" className="form-label">Make:</label>
                <select name="make" id="make" className="form-control" onChange={handleMakeChange}>
                  <option value="">-Choose Make...</option>
                  {makes.map((make) => (
                    <option key={make.id} value={make.id}>
                      {make.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="model" className="form-label">Model:</label>
                <select name="model" id="model" className="form-control" onChange={handleModelChange}>
                  <option value="">-Choose Model...</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="generation" className="form-label">Generation:</label>
                <select name="generation" id="generation" className="form-control" onChange={handleGenerationsChange}>
                  <option value="">-Choose Generation...</option>
                  {generations.map((generation) => (
                    <option key={generation.id} value={generation.id}>
                      {generation.yearFrom + " to " + generation.yearTo}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
 
      <br>
      </br>
      <br>
      </br>
        <Line data={data} />
    </div>
  );
}

export default App;




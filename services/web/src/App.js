import { useState } from "react";

import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  const fetchData = () => {
    axios
      .get("http://localhost:8080/data")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => alert("error! error! oh no!"));
  };
  
  return (
    <div className="App">
      <h1>Fetcher</h1>
      <p>{JSON.stringify(data)}</p>
      <button onClick={fetchData}>Fetch data!</button>
    </div>
  );
}

export default App;

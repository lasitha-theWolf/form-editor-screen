import './App.css';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"

import LandingPage from "./components/DemoForm"


function App() {

  //call the classes
  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>

  );
}

export default App;

import "./App.css";
import Newletter from "./Pages/Newletter.jsx";
import ThankYou from "./Pages/ThankYou.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EmailContext } from "./Context";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  return (
    <EmailContext.Provider value={{ data, setData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Newletter />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Router>
    </EmailContext.Provider>
  );
}

export default App;

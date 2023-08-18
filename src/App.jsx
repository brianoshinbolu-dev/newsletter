import './App.css'
import Newletter from "./Pages/Newletter.jsx";
import ThankYou from "./Pages/ThankYou.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Newletter />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}

export default App

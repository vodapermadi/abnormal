import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Voda from "./portofolio/vodapermadi/Voda";
import Sabrina from "./portofolio/sabrinautami/Sabrina";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/abnormal" element={<Home />} />
          <Route path="/portofolio/vodapermadi" element={<Voda/>} />
          <Route path="/portofolio/sabrinautami" element={ <Sabrina/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

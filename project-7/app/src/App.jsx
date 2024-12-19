import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Routers() {
  return (
    <div>
    
      <BrowserRouter>
        <nav>
  
          <Link to="/Signup"></Link>
          <Link to="/"></Link> 
        </nav>

        <Routes>
          <Route path="//Signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <>
      <Routers />
    
    </>
  );
}

export default App;

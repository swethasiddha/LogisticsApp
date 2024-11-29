import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import MyShipment from "./components/myShipment/MyShipment";
import Dashboard from "./components/dashboard/Dashboard";
import SearchCriteria from "./components/searchCriteria/SearchCriteria";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/dashboard"
            element={
              <>
                <NavBar /> <Dashboard />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/my-shipment"
            element={
              <>
                <NavBar />
                <SearchCriteria />
                <MyShipment /> <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

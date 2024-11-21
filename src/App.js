import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import MyShipment from "./components/myShipment/MyShipment";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
                <NavBar /> <MyShipment /> <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

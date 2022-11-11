import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import "./assets/index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;

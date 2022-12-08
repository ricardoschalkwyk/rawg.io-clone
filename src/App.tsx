import { Route, Routes } from "react-router-dom";
import GameSelected from "./components/GameComp/GameSelected";
import Layout from "./components/Layout";
import DisplayPage from "./pages/DisplayPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  // {Sidebar}
  // Implement all matching icons to sidebar

  // {Basic functionality}
  // Add more data and test filter implementation

  // {GameSelected}
  // Create display for component
  // Pull data for selected game

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/landing"} element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/game" element={<DisplayPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

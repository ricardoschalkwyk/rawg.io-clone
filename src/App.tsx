import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DisplayPage from "./pages/DisplayPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  // {Basic functionality}
  // Add more data and test filter implementation

  // {OrderBy component}
  // Icon doesn't show after clicking if setShow() is used

  // ADD api queries to filter

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

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  // {Sidebar}
  // Fix spacing / sizing on sidebar
  // Implement all matching icons to sidebar

  // {Game-card}
  // Make hovering more smooth

  // {Basic functionality}
  // Add more data and test filter implementation

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/landing"} element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

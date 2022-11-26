import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  // Add conditional chaining to all necessary keys inside game interface
  // fix spacing and sizing on sidebar
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

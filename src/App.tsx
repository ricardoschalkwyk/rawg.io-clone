import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DisplayPage from "./pages/DisplayPage";
import SearchResults from "./pages/SearchResults";
import DiscoverPage from "./pages/DiscoverPage";

function App() {
  // {Basic functionality}
  // Test filter implementation
  // Add api queries to platforms filter

  // {OrderBy component}
  // Icon doesn't show after clicking if setShow() is used

  // {GameSelected}
  // Create display for component
  // Pull data for selected game

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:id" element={<DisplayPage />} />
          <Route path="/search/:title" element={<SearchResults />} />
          <Route path="/:discover/:url" element={<DiscoverPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

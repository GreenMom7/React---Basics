import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import PlayPage from "./pages/PlayPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

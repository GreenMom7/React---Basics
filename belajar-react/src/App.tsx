import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import PlayPage from "./pages/PlayPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        {/* Dynamic Route */}
        <Route path="/profile/:nameSlug" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

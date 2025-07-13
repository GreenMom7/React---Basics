import { Routes, Route, Link } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import PlayPage from "./pages/PlayPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import ProductListPage from "./pages/ProductListPage";
import { Button } from "./components/ui/button";
import FormPage from "./pages/FormPage";
import RFHPage from "./pages/RFHPage";

function App() {
  return (
    <>
      <nav className="bg-gray-100 px-4 py-2 mb-4 shadow">
        <ul className="flex flex-row gap-2 items-center">
          <li>
            <Button variant="outline" size="sm" asChild>
              <Link to="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" asChild>
              <Link to="/form">Form</Link>
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" asChild>
              <Link to="/play">Play</Link>
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" asChild>
              <Link to="/product-list">Product List</Link>
            </Button>
          </li>
          <li>
            <Button variant="outline" size="sm" asChild>
              <Link to="/profile/john-doe">Profile</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/rfh" element={<RFHPage />} />
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

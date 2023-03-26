import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Update from "./pages/Update"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="blog/:id" element={<Blog />} />
            <Route path="update/:id" element={<Update />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Store from "./pages/store";
import About from "./pages/about";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routing;

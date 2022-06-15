import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawerAppBar from "./components/Appbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <DrawerAppBar />

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

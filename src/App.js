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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

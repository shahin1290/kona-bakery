import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Banner from "./components/Banner";
import AppBar from "./components/appbar";

const App = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Banner />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

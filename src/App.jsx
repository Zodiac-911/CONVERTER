import "./App.css";
import Sidebar from "./composant/sidebar";
import Footer from "./composant/footer";
import Header from "./composant/header";
import Calculator from "./pages/calculator";
import Currency from "./pages/curr";
import UnitConvert from "./pages/musr";
import TempConvert from "./pages/temp";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/uniteConvert" element={<UnitConvert />} />
        <Route path="/tempConvert" element={<TempConvert />} />
      </Routes>
    </>
  );
}

export default App;

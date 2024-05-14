import "./App.css";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Nav/Nav";
import Home from "./pages/Home/Home";
import Location from "./component/Location/Location"
import { Routes, Route } from "react-router-dom";
import Menue from "./pages/Menue/Menue";
import Reservation from "./pages/Reservation/Reservation";
import Kontakt from "./pages/Kontakt/Kontakt"
import Angebote from "./pages/Angebote/Angebote";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menue" element={<Menue />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="angebote" element={<Angebote />} />
        <Route path="kontakt" element={<Kontakt />} />
      </Routes>
      <Location />
      <Footer />
    </>
  );
}

export default App;

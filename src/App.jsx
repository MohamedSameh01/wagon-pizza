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
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from './pages/Login/loginpage';
import RegisterPage from './pages/Register/Register';
import ForgetPassPage from './pages/ForgetPass/ForgetPassPage';
import ResetPassPage from './pages/ResetPass/ResetPassPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/ForgetPass" element={<ForgetPassPage />} />
        <Route path="/ResetPassword" element={<ResetPassPage />} />
      </Routes>

    </BrowserRouter>


  )
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

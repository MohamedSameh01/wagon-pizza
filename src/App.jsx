/* eslint-disable no-unused-vars */
import "./App.css";
import Footer from "./component/Footer/Footer";
import Nav from "./component/Nav/Nav";
import Home from "./pages/Home/Home";
import Location from "./component/Location/Location"
import Menue from "./pages/Menue/Menue";
import Reservation from "./pages/Reservation/Reservation";
import Kontakt from "./pages/Kontakt/Kontakt"
import Angebote from "./pages/Angebote/Angebote";
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login/loginpage';
import RegisterPage from './pages/Register/Register';
import ForgetPassPage from './pages/ForgetPass/ForgetPassPage';
import ResetPassPage from './pages/ResetPass/ResetPassPage';
import CartPage from "./pages/CartPage/CartPage";

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
        <Route path="cart" element={<CartPage />} >
          {/* <Route path="/payment" element={}/> */}
        </Route>


        {/* <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/ForgetPass" element={<ForgetPassPage />} />
        <Route path="/ResetPassword" element={<ResetPassPage />} /> */}
      </Routes>
      <Location />
      <Footer />
    </>

  )

}

export default App;

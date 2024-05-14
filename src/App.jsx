import './App.css'
import Home from './pages/Home/Home'
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
}

export default App

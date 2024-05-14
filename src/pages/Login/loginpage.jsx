import Footer from "../../component/Footer/Footer"
import Location from "../../component/Location/Location"
import Nav from "../../component/Nav/Nav"
import LoginCom from "../../component/login/loginCom"

function LoginPage() {
    return (
        <div className="login">
            <Nav />
            <LoginCom />
            <Location />
            <Footer />
        </div>
    )
}

export default LoginPage
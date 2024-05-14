import Footer from "../../component/Footer/Footer"
import Location from "../../component/Location/Location"
import Nav from "../../component/Nav/Nav"
import RegisterCom from "../../component/register/registerCom"


function RegisterPage() {
    return (
        <div className="Register">
            <Nav />
            <RegisterCom />
            <Location />
            <Footer />
        </div>

    )
}

export default RegisterPage
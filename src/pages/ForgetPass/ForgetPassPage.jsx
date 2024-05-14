import Footer from "../../component/Footer/Footer"
import Location from "../../component/Location/Location"
import Nav from "../../component/Nav/Nav"
import ForgetPassCom from "../../component/forgetPass/ForgetPassCom"

function ForgetPassPage() {
    return (
        <div className="login">
            <Nav />
            <ForgetPassCom />
            <Location />
            <Footer />
        </div>
    )
}

export default ForgetPassPage
import Footer from "../../component/Footer/Footer"
import Location from "../../component/Location/Location"
import Nav from "../../component/Nav/Nav"
import ResetPassCom from "../../component/resetPass/resetPassCom"


function ResetPassPage() {
    return (
        <div className="Register">
            <Nav />
            <ResetPassCom />
            <Location />
            <Footer />
        </div>

    )
}

export default ResetPassPage
import Menu from "../homepage/component/Menu";
import MainAcount from "./component/MainAcount";

function Acount() {
    return (
        <div className="container-fuid background">
            <div className="row">
                <div className="reponsive"></div>
                <Menu />
                <MainAcount/>
            </div>
        </div>
    )
}

export default Acount;
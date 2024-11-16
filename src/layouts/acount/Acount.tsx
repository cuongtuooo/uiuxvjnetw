import Menu from "../homepage/component/Menu";
import MainAcount from "./component/MainAcount";

function Acount() {
    return (
        <div className="container-fuid background">
            <div className="row">
                <Menu />
                <div style={{width: '30px'}}></div>
                <MainAcount/>
            </div>
        </div>
    )
}

export default Acount;
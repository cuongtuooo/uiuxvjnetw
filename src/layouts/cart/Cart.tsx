import Menu from "../homepage/component/Menu";
import "./Cart.css"
import MainCart from "./component/MainCart";

function Cart(){
    return(
        <div className="container-fuid background">
            <div className="row">
                <div className="reponsive"></div>   
                <Menu/>
                <MainCart/>
            </div>
        </div>
    )
}

export default Cart;
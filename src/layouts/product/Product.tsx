import Menu from "../homepage/component/Menu";
import MainProduct from "./component/MainProduct";

function Product(){
    return(
        <div className="container-fuid background">
            <div className="row">
                <Menu/>
                <MainProduct/>
            </div>
        </div>
    )
}

export default Product;
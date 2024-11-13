import Main from "./component/Main";
import Menu from "./component/Menu";
import "./HomePage.css"

function HomePage() {
    return (
        <div className="container-fuid background">
            <div className="row">
                <Menu/>
                <Main/>
            </div>
        </div>
    )
}

export default HomePage;
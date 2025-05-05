import Nav from "./Nav/Nav.jsx"
import SignIn from "../../pages/signin/SignIn.jsx"
import SignUp from "../../pages/signup/SignUp.jsx";
import {Link} from "react-router-dom";
import './header.scss'
function Header(){
    return(
        <header className={'header'}>
            <p className={'Logo'}>Vr Story</p>
            <Nav/>
            <div className={'header-buttons'}>
                <Link className={'header-buttons__signin'} to={"SignIn"}><button className={'header-buttons__signin-button btn'}>SignIn</button></Link>
                <Link className={'header-buttons__signup'} to={"SignUp"}><button className={'header-buttons__signup-button btn'}>SignUp</button></Link>
            </div>
        </header>
    )
}
export default Header
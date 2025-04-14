import {Link} from "react-router-dom";
import Signin from "../signin/Signin.jsx";
import Signup from "../signup/Signup.jsx";
function Layout(){
    return(
        <>
            <Link to='/Signin'>SignUp</Link>
            <Link to='/Signup'>SignIn</Link>
        </>
    )
}
export default Layout
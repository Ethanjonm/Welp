import { useDispatch } from "react-redux"
import * as sessionActions from "../../store/session";
import "./DemoLogin.css"
import { NavLink } from "react-router-dom";

function DemoLogin() {
    const dispatch = useDispatch()

    const handleDemo = (e) => {
        e.preventDefault()
        return dispatch(sessionActions.login({ email: "ethan@gmail.com", password:"password" }));
    }
    return(

        <div onClick={handleDemo}>
            <NavLink className="demoLogin" to="/">Demo Login</NavLink>
        </div>
    )
}

{/* <button onClick={handleClick} id="DemoLogin">Demo Login</button> */}

export default DemoLogin;

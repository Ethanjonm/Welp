import { useDispatch } from "react-redux"
import * as sessionActions from "../../store/session";
import "./DemoLogin.css"

function DemoLogin() {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        return dispatch(sessionActions.login({ email: "ethan@gmail.com", password:"password" }));
    }
    return(

        <button onClick={handleClick} id="DemoLogin">Demo Login</button>

    )
}


export default DemoLogin;

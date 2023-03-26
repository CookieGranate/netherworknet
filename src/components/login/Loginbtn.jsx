import { Link } from "react-router-dom";

const Loginbtn = () => {
    return (
        <div id="logindiv" className="m-3">
            <Link to={'/auth/login'}>
                <button id="loginbtn">
                    login
                </button>
            </Link>
        </div>
    )
}

export default Loginbtn
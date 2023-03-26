import { Link } from "react-router-dom";
import logo from '../img/NW_logo.jpg';

import Loginbtn from "./login/Loginbtn";

const Navbar = () => {
    return (
        <header className="w-full h-20 absolute top-0">
            <nav>
                <div id="left" className=" left-0 inline-block">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="w-16 align-middle inline-block" />
                        <p className="inline-block text-white">Netherworks.net</p>
                    </Link>
                </div>
                <div className="mt-3 inline-block" id="middle">
                    <ul>
                        <li className="inline-block">
                            <Link to={'/'}>home</Link>
                        </li>
                        <li className="inline-block">
                            <Link to={'/discord'}>discord</Link>
                        </li>
                    </ul>
                </div>
                <div className="float-right" id="login">
                    <div>
                        <Loginbtn />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
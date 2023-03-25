import { Link } from "react-router-dom";
import logo from '../img/NW_logo.jpg'

const Navbar = () => {
    return (
        <header className="w-full h-20 absolute top-0">
            <nav>
                <div id="left" className="absolute left-0">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="w-16 align-middle" />
                        Netherworks.net
                    </Link>
                </div>
                <div className="absolute left-1/2" id="middle">

                </div>
            </nav>
        </header>
    )
}

export default Navbar
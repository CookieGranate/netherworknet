import logo from '../img/NW_logo.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="h-20 w-full top-0 absolute">
            <nav>
                <div id="left">
                    <Link to={'/'}>
                        <img className='max-h-14 align-middle' src={logo} alt="logo" />
                        Netherwork.net
                    </Link>
                </div>
            </nav>test
        </header>
    )
}

export default Navbar
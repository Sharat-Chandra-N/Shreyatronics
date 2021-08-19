import './NavBar.css';
import {Link} from 'react-router-dom'
import { useCartContext } from "../context/CartContext";
import { useAdminContext } from '../context/AdminContext';

const NavBar = () => {

    const {cart} = useCartContext()
    const { loggedIn } = useAdminContext()
    const { updateLoginStatus } = useAdminContext()

    return ( 
        <nav>
            <div className ="main-navbar">
                <Link 
                    to="/" 
                    onClick={() => updateLoginStatus()} 
                    className="main-header">
                    <h1 className ="main-header">Shreyatronics</h1>
                </Link>
                <Link 
                    to="/Cart" 
                    onClick={() => updateLoginStatus()} 
                    className="main-header-cart">
                    <h4 className ="main-header-cart">Cart</h4>
                    {cart.length !== 0 && <h4 className ="main-header-cart-length">({cart.length})</h4>}
                </Link>
                <Link 
                    to="/ContactUs" 
                    onClick={() => updateLoginStatus()} 
                    className="main-header-contact">
                    <h4 className ="main-header-contact">Contact Us</h4>
                </Link>
                {loggedIn && 
                    <Link 
                        to="/Admin" 
                        onClick={() => updateLoginStatus()} 
                        className="main-header-contact">
                        <h4 className ="main-header-contact">Logout</h4>
                        </Link>
                    }
            </div>
        </nav>
     );
}
 
export default NavBar;
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage </Link>
                </li>
                <li>
                    <Link to="/customerpage">Customer page</Link>
                </li>
                <li>
                    <Link to="/bookingHistory">Booking & Renting History</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;
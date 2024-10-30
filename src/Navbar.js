import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <div className = 'navbar'>
           <div className="navbar1">
           <ul>
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/Text'>About us</Link></li>
                    <li><Link to = '/CreateEvent'>Create Event</Link></li>
                    <li><Link to = '/'>Community chat</Link></li>
                    
                </ul>
           </div>
        </div>

    );
}
 
export default Navbar;
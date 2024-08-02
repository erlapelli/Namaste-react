import {LOGO_URL} from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const[btnNameReact,setBtnNameReact] = useState("Login");
    // console.log("Header render");

    const OnlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)


    // Subscribing to the store using Selector 
    const cartItems = useSelector((store)=> store.cart.items);
    //console.log(cartItems)

    return(
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img
                className="w-56" 
                src = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-6 m-6">
                    <li className="px-4">
                        Online Status:{OnlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                        
                        </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                        
                        </li>

                        {/* <li className="px-4">
                        <Link to="/grocery">Grocery</Link></li> */}

                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart"> Cart - ({cartItems.length} items) </Link></li>
                    <button 
                    className="login"
                    onClick={()=>{

                       btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                       : setBtnNameReact("Login");
                    }}
                    
                    >{btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>

            </div>

        </div>
    )
}

export default Header;
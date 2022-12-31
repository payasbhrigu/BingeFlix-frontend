import "./navbar.scss"
import { Search,ArrowDropDown,Notifications } from "@material-ui/icons"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

function NavBar() {

    const [isScrolled,setIsScrolled] = useState(false)
    const { dispatch } = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => {window.onscroll = null}
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img className="logo" src={require("../../images/logo_1.png")} alt="BingeFlix"/>
                    <Link to='/' className="link">
                        <span className="tabs">Home</span>
                    </Link>
                    <Link to='/series' className="link">
                        <span className="tabs">Series</span>
                    </Link>
                    <Link to='/movies' className="link">
                        <span className="tabs">Movies</span>
                    </Link>
                    <span className="tabs">New and Popular</span>
                    <span className="tabs">My Collections</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>Profile</span>
                    <Notifications className="icon"/>
                    <div className="profile">
                        <img className="usericon" src={require("../../images/user.png")} alt="User"/>
                        <ArrowDropDown className="dropdown"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={()=>dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
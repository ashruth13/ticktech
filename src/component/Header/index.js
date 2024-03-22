import { Component } from "react";
import ThemeContext from "../../context/ThemeContext";
import {Link} from 'react-router-dom'
import './index.css'

class Header  extends Component{
    render(){
        return(
            <ThemeContext.Consumer>
                {value =>{
                    const {theme, toggleTheme} = value
                    const changeTheme = () => {
                        toggleTheme()
                    }
                    return (
                        <div className={`header-main ${theme ? "white" : ""}`}>
                            <div className="header-one">
                                <Link to="/" className="noLink">
                                <img className="header-logo" src={theme ? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/at5oi9hgkiyyxsrsnpwe" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/ygfjlcccq5f0tyjvi76r"}/>
                                </Link>
                                <h1 className="header-head">ANISH KUMAR SINHA</h1>
                            </div>
                            <div className="header-second">
                                <Link to="/"className="noLink">
                                <p className="header-para">Home</p>
                                </Link>
                                <Link to="/about" className="noLink">
                                <p className="header-para">About</p>
                                </Link>
                                <Link to="/"className="noLink">
                                <p className="header-para">Resume</p>
                                </Link>
                                <Link to="/"className="noLink">
                                <p className="header-para">Skills</p>
                                </Link>
                                <Link to="/"className="noLink">
                                <p className="header-para">Projects</p>
                                </Link>
                                <Link to="/"className="noLink">
                                <p className="header-para">Contact</p>
                                </Link>
                                <button className="noBtn" onClick={changeTheme}>
                                    <img className="header-toggle" src={theme ? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/gb4652uktc2avfcthzch" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/qrbkujdislvmrwjcry9u"}/>
                                </button>
                            </div>
                        </div>
                    )
                }}

            </ThemeContext.Consumer>
               
        )
    }
}

export default Header
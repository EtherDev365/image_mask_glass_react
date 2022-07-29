import React from 'react'
import '../assets/css/Header.css'
import logo from '../assets/images/logo.png'
function Header() {
    const [menuFlag, setMenuFlag] = React.useState(false);
    const menu = React.useRef();

    const menuOpen = () =>{
        if(menuFlag){
            setMenuFlag(false);
            menu.current.removeAttribute("class", "change");
        }else{
            setMenuFlag(true);
            menu.current.setAttribute("class", "change");
        }
    }
    return (
        <div className='Title'>
            <img src={logo} alt="logo"></img>
            <div className="menu-icon" onClick={menuOpen} ref={menu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    )
}

export default Header
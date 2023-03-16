import { Link, NavLink } from "react-router-dom";

const HeaderLogo = () => {
    return (
        <div className="header__logo">
            <Link to="index.html">
                <img src="http://volna.volkovdesign.com/img/logo.svg" alt="" />
            </Link>
        </div>
    );
}

const HeaderNav = () => {
    return (
        <nav className="header__nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contacts</NavLink>
        </nav>
    );
}

const HeaderSearch = () => {
    return (
        <form action="#" className="header__search">
            <input type="text" placeholder="Artist, track or podcast" />
            <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
            <button type="button" className="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" /></svg></button>
        </form>
    );
}

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <HeaderLogo />
                <HeaderNav />
                <HeaderSearch/>
                <button className="header__btn" type="button">
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    )
}

export default Header;
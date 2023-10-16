import React from 'react';
import searchIcon from '../assets/img/search.svg';
import vectorIcon from '../assets/img/Vector.svg';

function Navbar() {
    return (
        <header className="header">
            <nav className="nav flex-y">
                <div className="nav__logo flex-y">
                    <a className='logo__text' href='/'>Kelontong</a>
                </div>
                <div className="nav__mid flex-y">
                    <div className="nav__search">
                        <input className="input__search" type="text" placeholder="Search" />
                        <img className="icon__search" src={searchIcon} alt="Search Icon" />
                    </div>
                    <div className="nav__btn-checkout">
                        <img className="icon__checkout" src={vectorIcon} alt="Vector Icon" />
                    </div>
                </div>
                <div className="nav__btn-auth flex-y">
                    <button className="btn__login">Masuk</button>
                    <button className="btn__register">Daftar</button>
                </div>
                <div className="nav__bars">
                    <div className="bars__line" id="bar-line">
                        <hr />
                        <hr />
                        <hr />
                    </div>

                    <div className="menu__bar" id="menu-bar">
                        <div className="close">
                            <div className="btn__close" id="btn-close">X</div>
                        </div>
                        <div className="menu__first flex-y">
                            <div className="nav__search">
                                <input className="input__search" type="text" placeholder="Search" />
                                <img className="icon__search" src={searchIcon} alt="Search Icon" />
                            </div>
                            <div className="nav__btn-checkout">
                                <img className="icon__checkout" src={vectorIcon} alt="Vector Icon" />
                            </div>
                        </div>
                        <div className="menu__second flex-y">
                            <button className="btn__login">Masuk</button>
                            <button className="btn__register">Daftar</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;

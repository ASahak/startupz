import React, {useState} from 'react';
import logo from '../../icons/logo.png';
import './style.css';
const Index = () => {
    const [isShow, setIsShow] = useState(false);
    const toggleMobileHeader = () => {
        setIsShow(!isShow);
    };

    return (
            <header className="main-header">
                <div className="container">
                    <div className="header-wrapper">
                        <a href="#">
                            <img src={logo} alt="logo"/>
                        </a>
                        <nav className="main-nav">
                            <label id="mobile-menu-button" onClick={toggleMobileHeader}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <ul className={ `nav-list ${isShow ? 'show' : ''}` }>
                                <li className="nav-item"><a href="#" className="nav-link" tabIndex="0">Startups</a></li>
                                <li className="nav-item"><a href="#" className="nav-link" tabIndex="0">Contact</a></li>
                                <li className="nav-item"><a href="#" className="nav-link nav-link_active" tabIndex="0">Work with us!</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
};
export default Index;
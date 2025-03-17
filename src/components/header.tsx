import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import { Button } from "./button.tsx";
import React, { useState } from "react";
import {search, cart, profile, logoMobile} from '../components/images.tsx';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => alert("Что-то произошло");

    return (
        <div className="wrapper">
            <header className="header">
                <div className="container">
                    <div className="header__icons">
                        <img className="icon search" src={search}/>
                        <img className="icon cart" src={cart}/>
                    </div>
                    <div className="header__logo">
                        <NavLink to={'/'}>
                            <img className="desktop" src={logo} alt="logo"/>
                        </NavLink>
                        <NavLink to={'/'}>
                            <img className="mobile" src={logoMobile} alt="logo"/>
                        </NavLink>
                    </div>

                    <div className="header__icons">
                        <img className="icon profile" src={profile}/>
                    </div>

                    <nav className="header__nav">
                        <ul>
                            <li>
                                <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : '')}>
                                    Профориентация
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : '')}>
                                    Выбрать вакансию
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : '')}>
                                    Карьера в ГЭНДАЛЬФ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : '')}>
                                    Стажерство
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/'} className={({isActive}) => (isActive ? 'active' : '')}>
                                    Отзывы
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Button onClick={handleClick} variant="whiteBlue">Запись на собеседование</Button>

                    <div className="header__mobile-menu">
                        <div
                            className={`header__mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>

                <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Профориентация</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Выбрать вакансию</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Карьера в ГЭНДАЛЬФ</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Стажерство</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Отзывы</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

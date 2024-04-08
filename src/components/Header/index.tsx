import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

const Header: FC = () => {
    return (
        <div className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__content}>
                    <nav className={style.header__menu}>
                        <ul className={style.header__list}>
                            <li className={style.header__menuItem}>
                                <Link to="">
                                    Home
                                </Link>
                            </li>
                            <li className={style.header__menuItem}>
                                <Link to="users">
                                    Users
                                </Link>
                            </li>
                            <li className={style.header__menuItem}>
                                <Link to="todos">
                                    Todos  
                                </Link>
                            </li>
                        </ul>
                    </nav>                        
                </div>
            </div>
        </div>
    );
};

export default Header;
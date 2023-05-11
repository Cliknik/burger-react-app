import React from 'react';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {NavLink} from "react-router-dom";

import appHeaderStyles from './app-header.module.css';

function AppHeader() {
        return (
            <header className={ `p-2 ${appHeaderStyles.header}`}>
                <nav className={appHeaderStyles.navigation}>
                    <div className={appHeaderStyles.container}>
                        <NavLink className={ `pl-5 ${appHeaderStyles.navItem}`} to='/'>
                            <BurgerIcon type={"primary"} />
                            <p className="text text_type_main-small pl-2 pr-5">Конструктор</p>
                        </NavLink>
                        <a className={ `pl-5 ${appHeaderStyles.navItem}`} href='#'>
                            <ListIcon type={"secondary"} />
                            <p className="text text_type_main-small text_color_inactive pl-2 pr-5">Лента заказов</p>
                        </a>
                    </div>
                    <Logo />
                    <a className={ `pl-5 ${appHeaderStyles.navAccount}` } href='#'>
                        <ProfileIcon type={"secondary"} />
                        <p className={`text text_type_main-small text_color_inactive pl-2 pr-5 ${appHeaderStyles.navAccountLink}`} >Личный кабинет</p>
                    </a>
                </nav>
            </header>
        )

}

export default AppHeader;
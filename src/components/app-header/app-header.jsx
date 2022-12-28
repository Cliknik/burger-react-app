import React from 'react';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import appHeaderStyles from './app-header.module.css';

class AppHeader extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <header className={ `p-2 ${appHeaderStyles.header}`}>
                <nav className={appHeaderStyles.navigation}>
                    <div className={appHeaderStyles.container}>
                        <div className={ `pl-5 ${appHeaderStyles.navItem}`}>
                            <BurgerIcon type={"primary"} />
                            <p className="text text_type_main-small pl-2">Конструктор</p>
                        </div>
                        <div className={ `pl-5 ${appHeaderStyles.navItem}`}>
                            <ListIcon type={"secondary"} />
                            <p className="text text_type_main-small text_color_inactive pl-2">Лента заказов</p>
                        </div>
                    </div>
                    <Logo />
                    <div className={ `pl-5 ${appHeaderStyles.navAccount}` } >
                        <ProfileIcon type={"secondary"} />
                        <p className="text text_type_main-small text_color_inactive pl-2">Личный кабинет</p>
                    </div>
                </nav>
            </header>
        )

    }

}

export default AppHeader;
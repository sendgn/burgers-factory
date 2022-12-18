import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';
import shrinkLeftIcon from '../../assets/img/shrink-left.png';
import expandRightIcon from '../../assets/img/expand-right.png';
import burgerLogo from '../../assets/img/burger.png';
import SideMenu from '../side-menu/side-menu';

const Sidebar = ({ page }) => {
    const [ isHidden, setIsHidden ] = useState(false);

    const handleToggleClick = () => {
        setIsHidden(isHidden ? false : true);
    }

    return (
        <div className={cn('sidebar', { 'sidebar_hidden': isHidden })}>
            <div className={cn('sidebar__content', {
                'sidebar__content_hidden': isHidden
            })}>
                <div className='sidebar__header'>
                    <Link className='link' to='/'>
                        <img src={burgerLogo} alt='Логотип фабрика бургеров' />
                    </Link>
                    <span className='sidebar__title'>
                        Добро пожаловать в “Фабрику бургеров”
                    </span>
                </div>
                <div className='sidebar__separator' />
                <SideMenu className='sidebar__menu' page={page} />
            </div>
            <img
                className='sidebar__toggle'
                src={isHidden ? expandRightIcon : shrinkLeftIcon}
                onClick={handleToggleClick}
                alt={isHidden ? 'Развернуть боковое меню' : 'Свернуть боковое меню'}
            />
        </div>
    );
}

export default Sidebar;

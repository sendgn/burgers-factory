import { Link } from 'react-router-dom';

import './sidebar.scss'
import shrinkLeftIcon from '../../assets/img/shrink-left.png'
import burgerLogo from '../../assets/img/burger.png';
import SideMenu from '../side-menu/side-menu';

const Sidebar = ({ page }) => {
    return (
        <div className='sidebar'>
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
            <img
                className='sidebar__toggle'
                src={shrinkLeftIcon}
                alt='Свернуть боковое меню'
            />
        </div>
    );
}

export default Sidebar;

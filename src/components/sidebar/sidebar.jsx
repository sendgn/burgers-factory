import './sidebar.scss'
import shrinkLeftIcon from '../../assets/img/shrink-left.png'
import burgerLogo from '../../assets/img/burger.png';
import SideMenu from '../side-menu/side-menu';

const Sidebar = ({ menu }) => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <img src={burgerLogo} alt='Логотип фабрика бургеров' />
                <span className='sidebar__title'>
                    Добро пожаловать в “Фабрику бургеров”
                </span>
            </div>
            <div className='sidebar__separator' />
            <SideMenu className='sidebar__menu' menu={menu} />
            <img
                className='sidebar__toggle'
                src={shrinkLeftIcon}
                alt='Свернуть боковое меню'
            />
        </div>
    );
}

export default Sidebar;

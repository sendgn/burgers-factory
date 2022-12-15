import './sidebar.scss'
import burger from '../../assets/img/burger.png';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <img src={burger} alt='Логотип фабрика бургеров' />
                <span className='sidebar__title'>Добро пожаловать в "Фабрику бургеров"</span>
            </div>
            
        </div>
    );
}

export default Sidebar;

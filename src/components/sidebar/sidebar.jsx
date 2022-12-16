import './sidebar.scss'
import burger from '../../assets/img/burger.png';
import Tree from '../tree/tree';

const tree = [
    {
        name: 'sandwiches',
        title: 'Сэндвичи',
        elements: [],
        isComplex: true,
    },
    {
        name: 'burgers',
        title: 'Бургеры',
        elements: [
            'Классический',
            'Чизбургер',
            'Биг Мак',
            'Биг Тейсти',
        ],
        isComplex: true,
    },
    {
        name: 'baguette',
        title: 'Багет',
        elements: [
            'С ветчиной',
            'С пастрами',
            'Чесночный',
            'С перцем-гриль',
        ],
        isComplex: false,
    },
]

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <img src={burger} alt='Логотип фабрика бургеров' />
                <span className='sidebar__title'>Добро пожаловать в "Фабрику бургеров"</span>
            </div>
            <div className='sidebar__separator' />
            <Tree className='sidebar__tree' items={tree} />
        </div>
    );
}

export default Sidebar;

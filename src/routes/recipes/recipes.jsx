import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';

const menu = [
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

const Recipes = () => {
    return (
        <div className='flex'>
            <Sidebar menu={menu} />
            <Main page='recipes' />
        </div>
    );
}

export default Recipes;

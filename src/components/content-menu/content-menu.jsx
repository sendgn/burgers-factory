import './content-menu.scss';
import { Link } from 'react-router-dom';

const ContentMenu = () => {
    const menuItems = [
        {
            title: 'Рецепт',
            to: '/recipes/recipe',
        },
        {
            title: 'Время приготовления',
            to: '/recipes/cooking-time',
        },
        {
            title: 'Подача',
            to: '/recipes/serving',
        }
    ]

    return (
        <div className='content-menu'>
            {menuItems.map(({ title, to }) => (
                <Link
                    className='content-menu__link link'
                    to={to}
                    key={title}
                >
                    {title}
                </Link>
            ))}
        </div>
    );
}

export default ContentMenu;

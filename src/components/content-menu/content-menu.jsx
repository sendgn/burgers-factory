import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import './content-menu.scss';

const ContentMenu = () => {
    const menuItems = [
        {
            name: 'recipe',
            title: 'Рецепт',
            to: '/recipes/recipe',
        },
        {
            name: 'cooking-time',
            title: 'Время приготовления',
            to: '/recipes/cooking-time',
        },
        {
            name: 'serving',
            title: 'Подача',
            to: '/recipes/serving',
        }
    ]

    const location = useLocation();

    return (
        <div className='content-menu'>
            {menuItems.map(({ name, title, to }) => (
                <Link
                    className={
                        cn(
                            'content-menu__link link', {
                                'content-menu__link_selected': location.pathname.includes(name) 
                            })}
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

import cn from 'classnames';
import { Link } from 'react-router-dom';
import './navigation.scss';

const links = [
    {
        name: 'recipes',
        title: 'Рецепты',
        to: '/recipes'
    },
    {
        name: 'prices',
        title: 'Прайс-лист',
        to: '/prices'
    },
    {
        name: 'combo',
        title: 'Комбо-наборы',
        to: '/combo'
    },
]

const Navigation = ({ page }) => {
    return (
        <div className='navigation'>
            {links.map((link => {
                return (
                    <Link 
                        className={cn('navigation__item link', {
                            navigation__item_selected: page.includes(link.to)
                        })}
                        to={link.to} 
                        key={link.name}
                    >
                        {link.title}
                    </Link>
                );
            }))}
        </div>
    );
}

export default Navigation;

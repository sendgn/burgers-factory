import cn from 'classnames';
import { Link } from 'react-router-dom';
import './navigation.scss';

const links = [
    {
        name: 'recipes',
        text: 'Рецепты',
        to: '/'
    },
    {
        name: 'prices',
        text: 'Прайс-лист',
        to: '/prices'
    },
    {
        name: 'combo',
        text: 'Комбо-наборы',
        to: '/combo'
    },
]

const Navigation = ({ selected }) => {
    return (
        <div className='navigation'>
            {links.map((link => {
                return (
                    <Link 
                        className={
                            cn('navigation__link link',
                            { link_selected: link.name === selected })
                        }
                        to={link.to} 
                        key={link.name}
                    >
                        {link.text}
                    </Link>
                );
            }))}
        </div>
    );
}

export default Navigation;

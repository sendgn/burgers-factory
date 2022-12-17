import { useState } from 'react';
import cn from 'classnames';

import './side-menu.scss';
import chevronDownDarkIcon from '../../assets/img/chevron-down-dark.png';
import chevronDownLightIcon from '../../assets/img/chevron-down-light.png';
import recipes from '../../data/recipes.json';

const SideMenu = ({ className, page }) => {
    let menu;
    if (page === '/recipes') {
        menu = recipes;
    }

    const [ activeMenuItem, setActiveMenuItem ] = useState();

    const handleMenuItemClick = () => {
        // setActiveMenuItem();
    }

    return (
        <>
            {menu && <div className={cn('side-menu', className)}>
                {menu.map(({ name, title, items, isComplex }) => {
                    return (
                        <div className='side-menu__item' key={name}>
                            <div className='side-menu__item-title'>
                                <img
                                    src={
                                        isComplex ?
                                            chevronDownDarkIcon :
                                            chevronDownLightIcon
                                    }
                                    alt='Категория рецептов'
                                />
                                <span>{title}</span>
                            </div>
                            {items.length !== 0 &&
                                <div className='side-menu__item-content'>
                                    {items.map(({ name, title }) => {
                                        return (
                                            <div
                                                className='side-menu__item-element'
                                                key={name}
                                                onClick={(name) => handleMenuItemClick(name)}
                                            >
                                                {title}
                                            </div>
                                        );
                                    })}
                                </div>
                            }
                        </div>
                    );
                })}
            </div>}
        </>
    );
}

export default SideMenu;

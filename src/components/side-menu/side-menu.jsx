import cn from 'classnames';
import './side-menu.scss';
import chevronDownDarkIcon from '../../assets/img/chevron-down-dark.png';
import chevronDownLightIcon from '../../assets/img/chevron-down-light.png';
import { useState } from 'react';

const SideMenu = ({ className, menu }) => {
    const [ activeMenuItem, setActiveMenuItem ] = useState();

    const handleMenuItemClick = () => {
        // setActiveMenuItem();
    }

    return (
        <div className={cn('side-menu', className)}>
            {menu.map(({ isComplex, title, elements, name }) => {
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
                        {elements.length !== 0 &&
                            <div className='side-menu__item-content'>
                                {elements.map((element) => {
                                    return (
                                        <div
                                            className='side-menu__item-element'
                                            key={element}
                                            onClick={(element) => handleMenuItemClick(element)}
                                        >
                                            {element}
                                        </div>
                                    );
                                })}
                            </div>
                        }
                    </div>
                );
            })}
        </div>
    );
}

export default SideMenu;

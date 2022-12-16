import cn from 'classnames';
import './tree.scss';
import chevronDownDarkIcon from '../../assets/img/chevron-down-dark.png';
import chevronDownLightIcon from '../../assets/img/chevron-down-light.png';

const Tree = ({ className, items }) => {
    return (
        <div className={cn('tree', className)}>
            {items.map(({ isComplex, title, elements, name }) => {
                return (
                    <div className='tree__item' key={name}>
                        <div className='tree__item-title'>
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
                            <div className='tree__item-content'>
                                {elements.map((element) => {
                                    return (
                                        <div className='tree__item-element'>
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

export default Tree;

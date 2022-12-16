import cn from 'classnames';
import './tree.scss';
import chevronDark from '../../assets/img/chevron-dark.png';
import chevronLight from '../../assets/img/chevron-light.png';

const Tree = ({ className, items }) => {
    return (
        <div className={cn('tree', className)}>
            {items.map(({ isComplex, title, elements, name }) => {
                return (
                    <div className='tree__item' key={name}>
                        <div className='tree__item-title'>
                            <img
                                src={isComplex ? chevronDark : chevronLight}
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

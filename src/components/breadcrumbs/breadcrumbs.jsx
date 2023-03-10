import cn from 'classnames';
import './breadcrumbs.scss';
import chevronRight from '../../assets/img/chevron-right.png';

const Breadcrumbs = ({ className, items }) => {
    return (
        <div className={cn('breadcrumbs', className)}>
            {items.map((item, index) => {
                return (
                    <div className='breadcrumbs__item' key={item}>
                        <span>{item}</span>
                        {index !== items.length - 1 && <img src={chevronRight} alt='Стрелка вправо' /> }
                    </div>
                );
            })}
        </div>
    );
}

export default Breadcrumbs;

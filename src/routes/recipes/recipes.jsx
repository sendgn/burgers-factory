import './recipes.scss';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

const Recipes = () => {
    const breadcrumbsItems = [
        'Рецепты',
        'Бургеры',
        'Классический',
    ];

    return (
        <div className='recipes'>
            <div className='recipes__header'>
                <Breadcrumbs className='recipes__breadcrumbs' items={breadcrumbsItems}/>
                <div className='recipes__title'>
                    Классический
                </div>
            </div>
            
        </div>
    );
}

export default Recipes;

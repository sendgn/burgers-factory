import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import './recipes.scss';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

const Recipes = () => {
    const breadcrumbsItems = [
        'Рецепты',
        'Бургеры',
        'Классический',
    ];

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/recipes/recipe');
    }, [navigate])

    return (
        <div className='recipes'>
            <div className='recipes__header'>
                <Breadcrumbs
                    className='recipes__breadcrumbs'
                    items={breadcrumbsItems}
                />
                <div className='recipes__title'>
                    Классический
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Recipes;

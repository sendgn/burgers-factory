import { Routes, Route } from 'react-router-dom';
import Navigation from '../../routes/navigation/navigation';
import Recipes from '../recipes/recipes';
import './category.scss';

const Category = () => {
    return (
        <div className='category'>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Recipes />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default Category;

import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import Recipes from './routes/recipes/recipes';
import Recipe from './routes/recipe/recipe';
import Prices from './routes/prices/prices';
import Combo from './routes/combo/combo';
import NotFound from './routes/not-found/not-found';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='recipes' element={<Recipes />}>
                    <Route path='recipe' element={<Recipe />} />
                </Route>
                <Route path='prices' element={<Prices />} />
                <Route path='combo' element={<Combo />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;

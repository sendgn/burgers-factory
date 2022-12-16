import { Route, Routes } from 'react-router-dom';
import Recipes from './routes/recipes/recipes';
import PriceList from './routes/prices/prices';
import ComboSets from './routes/combo/combo';

function App() {
    return (
        <Routes>
            <Route index element={<Recipes />} />
            <Route path='/prices' element={<PriceList />} />
            <Route path='/combo' element={<ComboSets />} />
        </Routes>
    );
}

export default App;

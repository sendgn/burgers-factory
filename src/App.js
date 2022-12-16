import { Route, Routes } from 'react-router-dom';
import Recipes from './routes/recipes/recipes';

function App() {
    return (
        <Routes>
            <Route index element={<Recipes />} />
            <Route path='/prices' element={<Recipes />} />
            <Route path='/combo' element={<Recipes />} />
        </Routes>
    );
}

export default App;

import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';
import './recipes.scss';

const Recipes = () => {
    return (
        <div className='recipes'>
            <Sidebar />
            <Main />
        </div>
    );
}

export default Recipes;

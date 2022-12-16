import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';

const Recipes = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Main page='recipes' />
        </div>
    );
}

export default Recipes;

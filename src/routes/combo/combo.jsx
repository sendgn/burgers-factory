import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';

const Combo = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Main page='combo' />
        </div>
    );
}

export default Combo;

import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';

const Home = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Main />
        </div>
    );
}

export default Home;

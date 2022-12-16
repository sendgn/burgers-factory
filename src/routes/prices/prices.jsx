import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';

const Prices = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Main page='prices' />
        </div>
    );
}

export default Prices;

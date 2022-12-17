import { Outlet, useLocation } from 'react-router-dom';

import './home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Navigation from '../../components/navigation/navigation';

const Home = () => {
    const { pathname } = useLocation();
    
    return (
        <div className='flex'>
            <Sidebar page={pathname} />
            <div className='main'>
                <Navigation page={pathname}/>
                <Outlet />
            </div>
        </div>
    );
}

export default Home;

import { Outlet } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
    return (
        <>
            <div className='navigation'>Navigation bar</div>
            <Outlet />
        </>
    );
}

export default Navigation;

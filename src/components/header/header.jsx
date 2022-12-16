import Navigation from '../navigation/navigation';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import './header.scss';

const Header = ({ page }) => {
    return (
        <div className='header'>
            <Navigation selected={page} />
            <div className='header__route'>
                <Breadcrumbs className='header__breadcrumbs' />
                <div className='header__title'>
                    Классический
                </div>
            </div>
        </div>
    );
}

export default Header;

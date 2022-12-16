import Navigation from '../navigation/navigation';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import './header.scss';

const Header = ({ page }) => {
    return (
        <div className='header'>
            <Navigation selected={page} />
            <Breadcrumbs />
            <div className='header__title'>
                Название бургера
            </div>
        </div>
    );
}

export default Header;

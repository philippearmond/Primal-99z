import Login from '../../containers/Login/Login';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const Navigation = () => (
    <nav style={{ display: 'flex', flexDirection: 'column' }}>
        <Login />
        <NavigationItems />
    </nav>
);

export default Navigation;

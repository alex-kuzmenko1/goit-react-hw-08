
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';


const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};


export default UserMenu;  
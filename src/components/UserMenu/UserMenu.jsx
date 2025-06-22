import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <div className={css.wrapper}>
      <button className={css.button} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
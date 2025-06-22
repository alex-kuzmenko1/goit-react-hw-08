import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  if (!isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};


export default PrivateRoute;
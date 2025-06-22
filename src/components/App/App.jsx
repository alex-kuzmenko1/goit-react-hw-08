import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../../Pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../Pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../Pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}
import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../redux/auth';
import AppBar from '../AppBar';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import s from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser,
  );

  useEffect(() => {
    if (!token) return;
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch, token]);

  return (
    <div className={s.app}>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </div>
  );
};

export default App;

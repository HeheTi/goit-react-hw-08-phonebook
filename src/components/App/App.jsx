import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import { authOperations } from '../../redux/auth';
import AppBar from '../AppBar';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import 'react-toastify/dist/ReactToastify.min.css';
import { authSelectors } from '../../redux/auth';
import s from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const isFetchingCurrentUser = useSelector(authSelectors.getCurrentUser);

  useEffect(() => {
    if (!token) return;
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch, token]);

  return (
    <div className={s.app}>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <ToastContainer autoClose={3000} transition={Zoom} />
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

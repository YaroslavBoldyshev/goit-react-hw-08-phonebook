// import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'Components/common/Container/Container';
import { AppBar } from 'Components/UserMenu/AppBar';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { RotatingLines } from 'react-loader-spinner';
import { HomePage } from 'Components/HomePage/HomePage';
import authOperations from 'redux/auth/auth-operations';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from 'Components/UserMenu/PrivateRoute';
import { RestrictedRoute } from 'Components/UserMenu/RestrictedRoute';
import { Error } from 'Components/Error/Error';
import { Suspense } from 'react';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <Suspense fallback={<RotatingLines strokeColor="pink" width="80" />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;

// const Section = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   gap: 10px;
//   background-color: #ffffe8;
// `;

// const Logo = styled.img`
//   width: 50px;
// `;

// const Title = styled.h1`
//   display: flex;
//   align-items: crnter;
// `;

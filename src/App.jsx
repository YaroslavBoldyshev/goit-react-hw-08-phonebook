// import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'Components/common/Container/Container';
import { AppBar } from 'Components/AppBar/AppBar';
import Contacts from 'pages/Contacts/Contacts';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import { HomePage } from 'Components/HomePage/HomePage';
import authOperations from 'redux/auth/auth-operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
      </Routes>
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

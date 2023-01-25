import { Label } from 'Components/common/Label/Label';
import { Button } from 'Components/common/Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import Watermelon from '../../icons/Watermelon.png';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const Register = () => {
  // const isLoggedIn = useSelector(authSelectors.getUser);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   navigate('/contacts');
  // }, [isLoggedIn]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Section>
      <FormWrapper>
        <h1>Create your account</h1>
        <p>Welcome! Please enter your details.</p>
        <Form onSubmit={handleSubmit}>
          <Label>
            <span>Name</span>
            <input
              type="name"
              name="name"
              pattern="^([a-zA-Zа-яА-Я0-9]).{2,24}$"
              title="Invalid name"
              required
              autoComplete="username"
              placeholder="Enter your name..."
              value={name}
              onChange={e => setName(e.currentTarget.value)}
            />
          </Label>
          <Label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Invalid email address"
              required
              autoComplete="username"
              placeholder="Enter your email..."
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
            />
          </Label>
          <Label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              pattern="^([a-zA-Zа-яА-Я0-9]).{2,24}$"
              title="Invalid password"
              required
              autoComplete="current-password"
              placeholder="• • • • • • •"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
            />
          </Label>
          <SubmitBtn type="submit">Sign up</SubmitBtn>
        </Form>
        <nav>
          <SignUpLink to="/login">
            <LinkInfo>Already have an account?</LinkInfo>Sign in
          </SignUpLink>
        </nav>
      </FormWrapper>
      <LogoWrapper>
        <Logo src={Watermelon} alt="logo" />
      </LogoWrapper>
    </Section>
  );
};

export default Register;

const Section = styled.div`
  display: flex;
  box-shadow: 5px 5px 5px #ffb5b5, -1px -1px 5px #ffb5b5;
  border-radius: 15px;
  overflow: hidden;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 600px;
  width: 100%;
  background-color: white;
  @media screen and (min-width: 480px) {
    width: 100%;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    width: 50%;
  }
`;

const LogoWrapper = styled.div`
  background: linear-gradient(#fcf4f0, #fcd8c7);
  display: none;
  @media screen and (min-width: 480px) {
    // display: none;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`;

const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Logo = styled.img`
  width: 160px;
  border-radius: 50%;
  box-shadow: 5px 5px 6px #ffb5b5;
`;

const SubmitBtn = styled(Button)`
  width: 100%;
  height: 34px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

const SignUpLink = styled(NavLink)`
  font-weight: 700;
  text-decoration: none;
  color: #f76b8a;
`;

const LinkInfo = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-right: 8px;
  color: grey;
`;

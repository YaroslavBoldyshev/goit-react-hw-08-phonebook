import { Label } from 'Components/common/Label/Label';
import { Button } from 'Components/common/Button/Button';
import { NavLink } from 'react-router-dom';
import Watermelon from '../../icons/Watermelon.png';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Section>
      <FormWrapper>
        <h1>Welcome back!</h1>
        <p>Welcome back! Please enter your details.</p>
        <Form onSubmit={handleSubmit}>
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
          <SubmitBtn type="submit">Log in</SubmitBtn>
        </Form>
        <nav>
          <SignUpLink to="/register">
            <LinkInfo>Dont have an account?</LinkInfo>Sign up
          </SignUpLink>
        </nav>
      </FormWrapper>
      <LogoWrapper>
        <Logo src={Watermelon} alt="logo" />
      </LogoWrapper>
    </Section>
  );
};

export default Login;

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

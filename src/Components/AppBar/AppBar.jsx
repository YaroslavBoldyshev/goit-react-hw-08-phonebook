import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from 'Components/common/Button/Button';
import Watermelon from '../../icons/Watermelon.png';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { ReactComponent as BurgerIcon } from '../../icons/burger.svg';
import { Modal } from 'Components/Modal/Modal';
import { useState } from 'react';

export const AppBar = () => {
  const user = useSelector(authSelectors.getUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  const [showModal, setShowModal] = useState(false);
  return (
    <Bar>
      {!isLoggedIn && (
        <Nav>
          <Link to="/register">Sign up</Link>
          <Link to="/login">Sign in</Link>
        </Nav>
      )}

      <Logo to="/contacts">
        <Icon src={Watermelon} />
        <p>Phonebook</p>
      </Logo>

      {isLoggedIn && (
        <UserInfo>
          <p>Welcome, {user?.name}</p>
          <Button type="button" onClick={() => setShowModal(state => !state)}>
            <BurgerIcon />
          </Button>
        </UserInfo>
      )}

      {showModal && <Modal hideModal={setShowModal} user={user} />}
    </Bar>
  );
};

const Bar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
`;

const Link = styled(NavLink)`
  font-weight: 700;
  text-decoration: none;
  color: grey;
  padding: 4px;
  transition-duration: 250ms;
  :hover {
    color: #f76b8a;
  }
  &.active {
    color: #f76b8a;
    border-bottom: 1px solid #f76b8a;
  }
`;

const Nav = styled.nav`
  margin-right: 60px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 60px;
`;

const Icon = styled.img`
  width: 40px;
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  gap: 5px;
  position: absolute;
  left: 45%;
  & p {
    font-weight: 700;
    font-size: 24px;
  }
`;

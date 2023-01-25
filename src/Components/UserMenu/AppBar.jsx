import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { Button } from 'Components/common/Button/Button';
import Watermelon from '../../icons/Watermelon.png';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { ReactComponent as BurgerIcon } from '../../icons/burger.svg';
import { Modal } from 'Components/Modal/Modal';
import { useState } from 'react';
import { Navigation } from './Navigation';

export const AppBar = () => {
  const user = useSelector(authSelectors.getUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Bar>
        <Navigation />

        <Logo to="/">
          <Icon src={Watermelon} />
          <p>Phonebook</p>
        </Logo>

        {isLoggedIn && (
          <UserInfo>
            <p>
              Welcome, <span>{user?.name}</span>
            </p>
            <Button type="button" onClick={() => setShowModal(state => !state)}>
              <BurgerIcon />
            </Button>
          </UserInfo>
        )}

        {showModal && <Modal showModal={setShowModal} user={user} />}
      </Bar>
      <Outlet />
    </>
  );
};

const Bar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 60px;
  span {
    font-weight: 700;
  }
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
  left: 42%;
  & p {
    font-weight: 700;
    font-size: 24px;
  }
`;

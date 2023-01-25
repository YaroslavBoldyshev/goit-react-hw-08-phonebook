import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'Components/common/Button/Button';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import profilePlaceholder from '../../icons/profilePlaceholder.png';

export const Modal = ({ showModal, user }) => {
  const dispatch = useDispatch();

  return (
    <ModalBox>
      <CloseBtn onClick={() => showModal(false)}>x</CloseBtn>

      <div>
        <ProfileName>
          <ProfilePhoto src={profilePlaceholder} alt="profile image" />
          <p>{user.name}</p>
        </ProfileName>
        <p>{user.email}</p>
      </div>

      <Button
        onClick={() => {
          showModal(false);
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </Button>
    </ModalBox>
  );
};
Modal.propTypes = {
  hideModal: PropTypes.func,
  user: PropTypes.object,
};

const ModalBox = styled.div`
  width: 250px;
  height: 200px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 1px 1px 5px #ffb5b5, -1px -1px 5px #ffb5b5;
  border-radius: 15px;
  overflow: hidden;
  position: absolute;
  top: 65px;
  right: 0px;
  &.visible {
    display: block;
  }
  button {
    display: flex;
    justify-content: center;
  }
`;

const ProfileName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-weight: 700;
  }
`;

const ProfilePhoto = styled.img`
  width: 40px;
`;

const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: grey;
  background-color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  transition-duration: 250ms;
  &:hover {
    color: #ffb5b5;
    border: 1px solid #ffb5b5;
  }
`;

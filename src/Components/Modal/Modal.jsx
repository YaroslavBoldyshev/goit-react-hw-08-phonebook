import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'Components/common/Button/Button';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export const Modal = ({ hideModal, user }) => {
  const dispatch = useDispatch();

  // const display = showModal ? 'block' : 'none';
  return (
    <ModalBox>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Button
        onClick={() => {
          hideModal(false);
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </Button>
    </ModalBox>
  );
};

const ModalBox = styled.div`
  width: 250px;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 1px 1px 5px #ffb5b5, -1px -1px 5px #ffb5b5;
  border-radius: 15px;
  overflow: hidden;
  position: absolute;
  top: 65px;
  right: 0px;
  &.visible {
    display: block;
  }
`;

Modal.propTypes = {
  showModal: PropTypes.bool,
  user: PropTypes.object,
};

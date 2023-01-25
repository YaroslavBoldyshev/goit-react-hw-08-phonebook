import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../common/Button/Button';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <ContactInfo>
        {contact.name}: {contact.number}
      </ContactInfo>

      <Button onClick={() => dispatch(deleteContact(contact.id))}>
        <Icon />
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
};

const Item = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const ContactInfo = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const Icon = styled(DeleteIcon)`
  width: 16px;
  height: 16px;
`;

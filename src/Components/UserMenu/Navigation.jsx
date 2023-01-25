import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Nav>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Sign in</Link>
      <Link to="/contacts">Contacts</Link>
    </Nav>
  );
};

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

import styled from 'styled-components';

export const Error = () => {
  return (
    <ErrMassage>
      Oops,{<br />} page not found :{'('} 🤔 🗿 🙈
    </ErrMassage>
  );
};

const ErrMassage = styled.h1`
  max-width: 500px;
  margin: 70px auto;
  font-size: 60px;
  text-align: center;
`;

import styled from 'styled-components';

export const HomePage = () => {
  return (
    <>
      <Title>Welcome page of our App</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        error odit quibusdam culpa reprehenderit velit quaerat vero nisi illo
        officiis ex excepturi facere beatae perferendis corrupti laborum
        provident, doloribus ullam. Iure fugiat sint nobis doloremque dolores
        voluptatem odio laboriosam at, nemo magnam. Neque perspiciatis in
        laboriosam itaque sint ratione eius veniam incidunt debitis cumque
        doloremque, distinctio quidem enim dolores fugiat quisquam dolorem.
        Autem velit fugiat voluptates ad? Iure, aliquid nulla.
      </p>
    </>
  );
};

const Title = styled.h1`
  width: 400px;
  margin: 70px auto;
  color: tomato;
`;

import styled from 'styled-components';
import book from '../../icons/book.jpg';

export const HomePage = () => {
  return (
    <Section>
      <Title>Welcome page of our App</Title>
      <Img src={book} alt="phonebook image" />
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
    </Section>
  );
};

const Title = styled.h1`
  width: 400px;
  margin: 0px auto;
  color: tomato;
`;

const Img = styled.img`
  object-fit: none;
  height: 300px;
  width: 100%;
`;
const Section = styled.div`
  padding-top: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

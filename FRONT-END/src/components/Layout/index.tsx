import React from 'react';

import Main from '../Main';
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <ContainerLeft /> */}
        <Main />
        {/* <ContainerRight /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;

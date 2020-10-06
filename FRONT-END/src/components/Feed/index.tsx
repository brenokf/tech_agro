import React from 'react';

import Post from '../Post';

import { Container, Tab, Posts } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Postagens</Tab>
      <Posts>
        <Post />
      </Posts>
    </Container>
  );
};

export default Feed;

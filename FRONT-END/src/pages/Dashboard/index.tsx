import React from 'react';

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong> Rockeseat </strong>
            <span>@rockeseat</span>
            <Dot />
            <time> 04 de Out</time>
          </Header>
          <Description> Foqguete não tem ré </Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Dashboard;

/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {
  useState,
  useEffect,
  useRef,
  FormEvent,
  useCallback,
} from 'react';

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

import api from '../../services/api';

type FormElement = React.FormEvent<HTMLFormElement>;
const Post: React.FC = () => {
  const [repositories, setRepositories] = useState<postData[]>([]);

  const reset = () => {
    setRepositories([]);
  };
  useEffect(() => {
    reset();
  }, []);
  async function handletList(e: FormEvent<HTMLFormElement>) {
    const response = await api.get('/posts');

    const repository = response.data;

    setRepositories([repositories, ...repository]);

    console.log(response);
  }
  return (
    <>
      <Container>
        <Body>
          <Avatar />
          <Content>
            <Header onSubmit={handletList}>
              <strong> TechAgro </strong>
              <span>@techagro</span>
              <Dot />
              <time> 04 de Out</time>
            </Header>

            <Description> ola AgroTech Bem vindo ao meu FrontEnd </Description>

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
    </>
  );
};

export default Post;

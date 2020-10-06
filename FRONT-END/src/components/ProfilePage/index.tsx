/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, FormEvent, useEffect } from 'react';
import Feed from '../Feed';
import api from '../../services/api';

import {
  Container,
  Form,
  Banner,
  ProfileData,
  EditButton,
  InputPos,
} from './styles';

interface postData {
  message: string;
}

type FormElement = React.FormEvent<HTMLFormElement>;
const ProfilePage: React.FC = () => {
  const [message, setMessage] = useState('');
  
  async function handleSubitList(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const request = await api.post('/posts', { message });
    setMessage('');
    console.log(request);
  }

  return (
    <Container>
      <Banner />
      <Form onSubmit={handleSubitList}>
        <ProfileData>
          <EditButton type="submit" outlined>
            Publicar
          </EditButton>
          <InputPos
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Digite o que está pensando"
          />
        </ProfileData>
      </Form>

      <Feed />
    </Container>
  );
};

export default ProfilePage;

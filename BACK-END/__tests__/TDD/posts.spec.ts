import request from 'supertest';
import app from '../../src/app';
import { isUuid } from 'uuidv4';

describe('App Post Test', () => {
  it('should test if you are creating the post', async () => {
    await request(app).post('/posts').send({
      message: 'agro test 1',
    });

    await request(app).post('/posts').send({
      message: 'agro test 2',
    });

    await request(app).post('/posts').send({
      message: 'agro test 3',
    });
  });

  it('should test that you are listing all posts', async () => {
    const response = await request(app).get('/posts');

    expect(response.body).toHaveLength(3);
    console.log('all post', response.body);
  });

  it('should test if you are listing a specific Id post', async () => {
    const repos = await request(app).post('/posts').send({
      message: 'ola sou teste [2]',
    });
    const response = await request(app).get(`/posts/${repos.body.id}`);

    expect(isUuid(response.body.id)).toBe(true);
    console.log('all post espec', response.body);
  });

  it('should test if you are creating a comment for the selected comment id', async () => {
    const repos = await request(app).post('/posts').send({
      message: 'ola sou teste [3]',
    });
    const coments = await request(app)
      .post(`/posts/${repos.body.id}/comments`)
      .send({
        comment: 'comentario teste ok ',
      });

    expect(isUuid(repos.body.id)).toBe(true);
    console.log('post', repos.body);
    console.log('comentario do post especifico', coments.body);
  });
});

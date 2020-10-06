import express, { Router, request, response } from 'express';
import { uuid } from 'uuidv4';

const post: any[] = [];
const comments: any[] = [];
const reposcomments: any[] = [];

const postsRoutes = Router();

postsRoutes.get('/posts', async (request, response) => {
  return response.json(post);
});

postsRoutes.post('/posts', async (request, response) => {
  const { message } = request.body;
  const newpost = {
    id: uuid(),
    message,
  };

  await post.push(newpost);
  return response.json(newpost);
});

postsRoutes.get('/posts/:id', async (request, response) => {
  const { id } = request.params;

  const postindex = post.findIndex(postrepository => postrepository.id === id);
  if (postindex === -1) {
    return response.status(404).json({ error: '404 Not found' });
  }

  const repository = {
    id,
    message: post[postindex].message,
  };

  post[postindex] = await repository;

  return response.json(repository);
});

postsRoutes.get('/posts/:id/comments', async (request, response) => {
  const { id } = request.params;
  ('');

  const postindex = post.findIndex(postrepository => postrepository.id === id);
  if (postindex === -1) {
    return response.status(404).json({ error: '404 Not found' });
  }

  for (var i = 0; i < comments.length; i++) {
    const repository = {
      id: uuid(),
      postid: post[postindex].id,
      comment: comments[i],
    };

    await reposcomments.push(repository);
  }
  return response.json(reposcomments);
});

postsRoutes.post('/posts/:id/comments', async (request, response) => {
  const { id } = request.params;
  ('');
  const postindex = post.findIndex(postrepository => postrepository.id === id);
  if (postindex === -1) {
    return response.status(404).json({ error: '404 Not found' });
  }
  const { comment } = request.body;
  const repocomments = {
    comment,
  };

  await comments.push(repocomments);
  return response.json(repocomments);
});

export default postsRoutes;

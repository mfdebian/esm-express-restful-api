import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../server.js';

describe('posts.js', () => {
  test('GET /posts should return a list of posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    res.body.forEach((post) => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('userId');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
    });
  });

  test('GET /posts/:postId should return a single post', async () => {
    const postId = 1;
    const res = await request(app).get(`/posts/${postId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', postId);
    expect(res.body).toHaveProperty('userId');
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('body');
  });

  test('POST /posts should create a new post', async () => {
    const newPost = {
      userId: 1,
      title: 'How AI helped me love my children',
      body: 'Some linkedin lunatic ramble to sell their own b2b AI SaaS',
    };

    const res = await request(app)
      .post('/posts')
      .send(newPost)
      .set('Content-Type', 'application/json');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', 101);
    expect(res.body).toHaveProperty('userId');
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('body');
    expect(res.body).toMatchObject(newPost);
  });

  test('PUT /posts/:postId should update a post', async () => {
    const postId = 1;
    const updatedPost = {
      title: 'I was finally able to sell my parents thank to AI',
      body: 'I could not find a way to sell my parents without using AI, \
      thank god now we have this amazing technology now',
    };

    const res = await request(app)
      .put(`/posts/${postId}`)
      .send(updatedPost)
      .set('Content-Type', 'application/json');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
    expect(res.body).toHaveProperty(
      'title',
      'I was finally able to sell my parents thank to AI'
    );
    expect(res.body).toHaveProperty(
      'body',
      'I could not find a way to sell my parents without using AI, \
      thank god now we have this amazing technology now'
    );
    expect(res.body).toMatchObject(updatedPost);
  });

  test('DELETE /posts/:postId should delete a post', async () => {
    const postId = 1;
    const res = await request(app).delete(`/posts/${postId}`);

    expect(res.status).toBe(200);
    expect(res.notFound).toBe(false);
    expect(res.badRequest).toBe(false);
    expect(res.body).toBe('OK');
  });
});

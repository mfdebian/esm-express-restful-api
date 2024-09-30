import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../server.js';

describe('users.js', () => {
  test('GET /users should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    res.body.forEach((user) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('username');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('address');
    });
  });

  test('GET /users/:userId should return a single user', async () => {
    const userId = 1;
    const res = await request(app).get(`/users/${userId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', userId);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('username');
    expect(res.body).toHaveProperty('email');
  });

  test('POST /users should create a new user', async () => {
    const newUser = {
      name: 'Totally Real',
      username: 'therealest',
      email: 'realest.alive@existing.com',
      phone: '666-420-9876',
      website: 'https://realestalive.com',
    };

    const res = await request(app)
      .post('/users')
      .send(newUser)
      .set('Content-Type', 'application/json');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toBe(11);
    expect(res.body).toMatchObject(newUser);
  });

  test('PUT /users/:userId should update a user', async () => {
    const userId = 1;
    const updatedUser = {
      username: 'leannedabest',
      address: {
        street: 'Wallaby Way 42',
        suite: 'P. Sherman',
        city: 'Sydney',
      },
    };

    const res = await request(app)
      .put(`/users/${userId}`)
      .send(updatedUser)
      .set('Content-Type', 'application/json');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('address', {
      street: 'Wallaby Way 42',
      suite: 'P. Sherman',
      city: 'Sydney',
    });
    expect(res.body).toHaveProperty('username', 'leannedabest');
    expect(res.body).toMatchObject(updatedUser);
  });

  test('DELETE /users/:userId should delete a user', async () => {
    const userId = 1;
    const res = await request(app).delete(`/users/${userId}`);

    expect(res.status).toBe(200);
    expect(res.notFound).toBe(false);
    expect(res.badRequest).toBe(false);
    expect(res.body).toBe('OK');
  });
});

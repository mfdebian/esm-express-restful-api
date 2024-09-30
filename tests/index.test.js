import { describe, test, expect } from 'vitest';
import request from 'supertest';
import app from '../server.js';

describe('index.js', () => {
  test('GET / should return the welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: 'Hello, welcome to the API',
    });
  });
});

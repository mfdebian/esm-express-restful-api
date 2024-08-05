export default (app) => {
  app.get('/posts', async (req, res, next) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      res.status(200).send(data);
    } catch (error) {
      next(error.status);
    }
  });

  app.get('/posts/:postId', async (req, res, next) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${req.params.postId}`
      );
      const data = await response.json();
      res.status(200).send(data);
    } catch (error) {
      next(error.status);
    }
  });

  app.post('/posts', async (req, res, next) => {
    try {
      const headers = new Headers();
      headers.append('Content-Type', req.get('Content-Type'));

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/',
        {
          method: 'POST',
          body: JSON.stringify(req.body),
          headers,
        }
      );
      const data = await response.json();
      res.status(200).send(data);
    } catch (error) {
      next(error.status);
    }
  });

  app.put('/posts/:postId', async (req, res, next) => {
    try {
      const headers = new Headers();
      headers.append('Content-Type', req.get('Content-Type'));

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${req.params.postId}`,
        {
          method: 'PUT',
          body: JSON.stringify(req.body),
          headers,
        }
      );
      const data = await response.json();
      res.status(200).send(data);
    } catch (error) {
      next(error.status);
    }
  });

  app.delete('/posts/:postId', async (req, res, next) => {
    try {
      const headers = new Headers();
      headers.append('Content-Type', req.get('Content-Type'));

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${req.params.postId}`,
        {
          method: 'DELETE',
          headers,
        }
      );
      res.status(200).json(response.statusText);
    } catch (error) {
      next(error.status);
    }
  });
};

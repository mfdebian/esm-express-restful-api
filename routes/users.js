export default (app) => {
  app.get('/users', async (req, res, next) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      res.status(200).send(data);
    } catch (error) {
      next(error.status);
    }
  });

  app.get('/users/:userId', async (req, res, next) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${req.params.userId}`
      );
      const data = await response.json();
      res.status(200).send(data);
    } catch (error) {
      next(error.status);
    }
  });

  app.post('/users', async (req, res, next) => {
    try {
      const headers = new Headers();
      headers.append('Content-Type', req.get('Content-Type'));

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/',
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

  app.put('/users/:userId', async (req, res, next) => {
    try {
      const headers = new Headers();
      headers.append('Content-Type', req.get('Content-Type'));

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${req.params.userId}`,
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

  app.delete('/users/:userId', async (req, res, next) => {
    try {
      const headers = new Headers();
      headers.append('Content-Type', req.get('Content-Type'));

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${req.params.userId}`,
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

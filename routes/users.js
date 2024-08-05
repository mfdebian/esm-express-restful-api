export default (app) => {
  app.get('/users', (req, res, next) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => res.status(200).send(data))
      .catch(error => next(error.status));
  });
  
  app.get('/users/:userId', (req, res, next) => {
    fetch('https://jsonplaceholder.typicode.com/users/'+req.params.userId)
      .then(res => res.json())
      .then(data => res.status(200).send(data))
      .catch(error => next(error.status));
  });

  app.post('/users', (req, res, next) => {
    const headers = new Headers();
    headers.append('Content-Type', req.get('Content-Type'));

    fetch('https://jsonplaceholder.typicode.com/users/', {
      method: "POST",
      body: JSON.stringify(req.body),
      headers,
    })
      .then(res => res.json())
      .then(data => res.status(200).send(data))
      .catch(error => next(error.status));
  });

  app.put('/users/:userId', (req, res, next) => {
    const headers = new Headers();
    headers.append('Content-Type', req.get('Content-Type'));

    fetch('https://jsonplaceholder.typicode.com/users/'+req.params.userId, {
      method: "PUT",
      body: JSON.stringify(req.body),
      headers,
    })
      .then(res => res.json())
      .then(data => res.status(200).send(data))
      .catch(error => next(error.status));
  });

  app.delete('/users/:userId', (req, res, next) => {
    const headers = new Headers();
    headers.append('Content-Type', req.get('Content-Type'));

    fetch('https://jsonplaceholder.typicode.com/users/'+req.params.userId, {
      method: "DELETE",
      headers,
    })
      .then(data => res.status(200).json(data.statusText))
      .catch(error => next(error.status));
  });
}

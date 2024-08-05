export default (app) => {
  app.get('/posts', (req, res, next) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => res.status(200).send(data))
      .catch(error => next(error.status));
  });
  
  app.get('/posts/:postId', (req, res, next) => {
    fetch('https://jsonplaceholder.typicode.com/posts/'+req.params.postId)
      .then(res => res.json())
      .then(data => res.status(200).send(data))
      .catch(error => next(error.status));
  });

  app.post('/posts', (req, res, next) => {
    const headers = new Headers();
    headers.append('Content-Type', req.get('Content-Type'));

    fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: "POST",
      body: JSON.stringify(req.body),
      headers,
    })
      .then(res => res.json())
      .then(data => res.status(200).send(data))
      .catch(error => next(error.status));
  });

  app.put('/posts/:postId', (req, res, next) => {
    const headers = new Headers();
    headers.append('Content-Type', req.get('Content-Type'));

    fetch('https://jsonplaceholder.typicode.com/posts/'+req.params.postId, {
      method: "PUT",
      body: JSON.stringify(req.body),
      headers,
    })
      .then(res => res.json())
      .then(data => res.status(200).send(data))
      .catch(error => next(error.status));
  });

  app.delete('/posts/:postId', (req, res, next) => {
    const headers = new Headers();
    headers.append('Content-Type', req.get('Content-Type'));

    fetch('https://jsonplaceholder.typicode.com/posts/'+req.params.postId, {
      method: "DELETE",
      headers,
    })
      .then(data => res.status(200).json(data.statusText))
      .catch(error => next(error.status));
  });
}

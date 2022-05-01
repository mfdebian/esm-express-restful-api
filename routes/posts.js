import axios from 'axios';

export default (app) => {
  app.get('/posts', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(response => res.status(200).json(response.data))
      .catch(error => next(error.response.status));
  });
  
  app.get('/posts/:postId', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/posts/'+req.params.postId)
      .then(response => res.status(200).json(response.data))
      .catch(error => next(error.response.status));
  });

  app.post('/posts', (req, res, next) => {
    let headers = {
      'Content-type': req.get('Content-Type')
    }
    axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      req.body, 
      { headers: headers },
    )
    .then(response => res.status(response.status).json(response.data))
    .catch(error => next(error.response.status));
  });

  app.put('/posts/:postId', (req, res, next) => {
    let headers = {
      'Content-type': req.get('Content-Type')
    }
    axios.put(
      'https://jsonplaceholder.typicode.com/posts/'+req.params.postId,
      req.body, 
      { headers: headers },
    )
    .then(response => res.status(response.status).json(response.data))
    .catch(error => next(error.response.status));
  });

  app.delete('/posts/:postId', (req, res, next) => {
    let headers = {
      'Content-type': req.get('Content-Type')
    }
    axios.delete(
      'https://jsonplaceholder.typicode.com/posts/'+req.params.postId,
      { headers: headers },
    )
    .then(response => res.status(response.status).json(response.statusText))
    .catch(error => next(error.response.status));
  });
}

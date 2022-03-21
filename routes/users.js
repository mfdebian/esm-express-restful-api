import axios from 'axios';

export default (app) => {
  app.get('/users', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(response => res.status(200).json(response.data))
      .catch(error => next(error.response.status));
  });

  app.post('/users', (req, res, next) => {
    let headers = {
      'Content-type': req.get('Content-Type')
    }
    axios.post(
      'https://jsonplaceholder.typicode.com/users',
      req.body, 
      {
        headers: headers
      },
    )
    .then(response => res.status(response.status).json(response.data))
    .catch(error => next(error.response.status));
  });

  app.get('/users/:userId', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/users/'+req.params.userId)
      .then(response => res.status(200).json(response.data))
      .catch(error => next(error.response.status));
  });
}

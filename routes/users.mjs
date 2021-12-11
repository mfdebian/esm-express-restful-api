import axios from 'axios';

export default (app) => {
  app.get('/users', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(response => res.status(200).json(response.data))
      .catch(next);
  });

  app.get('/users/:userId', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/users/'+req.params.userId)
      .then(response => res.status(200).json(response.data))
      .catch(err => next(err.response.status));
  });
}

import axios from 'axios';

export default (app) => {
  app.get('/users', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(response => res.status(200).json(response.data))
      .catch(next);
  });
}

import axios from 'axios';

export default (app) => {
  app.get('/users', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(response => res.status(200).json(response.data))
      .catch(error => next(error.response.status));
  });

  app.post('/users', (req, res) => {
    axios.post('https://jsonplaceholder.typicode.com/users',
    JSON.stringify({
        name: 'A name',
        email: 'aname@anemail.com'
      })
      ,{
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then(response => res.status(response.status).json(response.data))
      .catch(error => next(error.response.status));
  });

  app.get('/users/:userId', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/users/'+req.params.userId)
      .then(response => res.status(200).json(response.data))
      .catch(error => next(error.response.status));
  });
}

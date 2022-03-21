import users from './users.js';

export default (app) => {
  users(app);
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Hello, welcome to the REST API'
    });
  });
}

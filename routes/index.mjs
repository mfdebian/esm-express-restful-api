import users from './users.mjs';

export default (app) => {
  users(app);
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Hello, welcome to the REST API'
    });
  });
}

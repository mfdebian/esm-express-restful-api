import users from './users.js';
import posts from './posts.js';

export default (app) => {
  users(app);
  posts(app);
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Hello, welcome to the API'
    });
  });
}

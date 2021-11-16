import express from 'express';
import cors from 'cors';
import notFoundMiddleware from './middlewares/404.mjs';
import httpErrors from './middlewares/errors.mjs';


// 🚀 create the express app
const app = express();

// 📂 add the cors middleware
app.use(cors());

// 🤖 make our app use the express json middleware
app.use(express.json());

// 🚪 choose a port to run the app into
const PORT = 8080;

// 👂 make the app 'listen' on that port
app.listen(PORT, () => console.log(`The app is running on port: ${PORT}`));

// 🤝 handle response
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello, welcome to the REST API'
  });
})

// 🤷 handle unkown route's requests
app.use(notFoundMiddleware);

// 🙅 handle common http errors
app.use(httpErrors);

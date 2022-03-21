import express from 'express';
import cors from 'cors';
import registerRoutes from './routes/index.js'
import notFoundMiddleware from './middlewares/404.js';
import httpErrors from './middlewares/errors.js';


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

// 📝 register routes
registerRoutes(app);

// 🤷 handle unkown route's requests
app.use(notFoundMiddleware);

// 🙅 handle common http errors
app.use(httpErrors);

# ESM Express Restful API server

### Express restful API made for learning purposes

Run the app

`$ npm start`

Run the tests suite

`$ npm test`

---

Working routes:
- `/users`
- `/posts`

### Usage

Send a request

`$ curl http://localhost:8080`

Query a route

`$ curl http://localhost:8080/users`

Get one document using the `/id` route

`$ curl http://localhost:8080/posts/1`

Make a POST request

`$ curl -X POST http://localhost:8080/posts/ -H "Content-Type: application/json" -d '{"title": "A title", "body": "A body"}'`

Make a PUT request

`$ curl -X PUT http://localhost:8080/users/1 -H "Content-Type: application/json" -d '{"name": "A persons name", "email": "aname@person.com"}'`

Make a DELETE request

`$ curl -X DELETE http://localhost:8080/posts/1 -H "Content-Type: application/json"`

The app takes care of non existing routes and other common HTTP errors.

---

_Pro-tip: If you're using [curl](https://curl.se/), run it on silent mode using the `-s` option and use a JSON parser like [jq](https://github.com/stedolan/jq) to get a better readable output._

_This app makes use of the [JSONPlaceholder](https://github.com/typicode/jsonplaceholder) site for data usage._

_Tested using [Vitest](https://vitest.dev/) and [SuperTest](https://www.npmjs.com/package/supertest)._

# ESM Express Restful API server

### Express restful API made for learning purposes

Run the app

`$ node server.mjs`

---

### Examples:

Send a request

`$ curl http://localhost:8080`

Query the `/users` route

`$ curl http://localhost:8080/users`

Get one user using the `/users/id` route

`$ curl http://localhost:8080/users/1`

Make a POST request

`$ curl -X POST http://localhost:8080/users/ -H "Content-Type: application/json" -d '{"name": "A persons name", "email": "aname@person.com"}'`

The app takes care of non existing routes and other common HTTP errors.

---

_Pro-tip: If you're using [curl](https://curl.se/), run it on silent mode using the `-s` option and use a JSON parser like [jq](https://github.com/stedolan/jq) to get a better readable output._

_This app makes use of the [JSONPlaceholder](https://github.com/typicode/jsonplaceholder) site for data usage._
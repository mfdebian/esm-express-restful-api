const httpErrors = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  500: 'Internal server error',
};

const isKnownHTTPErrorStatus = (num) => {
  if(typeof num === 'number' && Object.keys(httpErrors).indexOf(`${num}`) >= 0) {
    return true;
  } else {
    return false;
  }
}

export default (err, req, resp, next) => {
  let statusCode;

  if(isKnownHTTPErrorStatus(err)) {
    statusCode = err;  
  } else if(err.statusCode) {
    statusCode = err.statusCode
  } else {
    statusCode = 500;
  }
  
  const message = (err.message || httpErrors[statusCode] || `${err}`).trim();

  // if (statusCode === 500) {
  //   console.error(statusCode, message);
  // }
  
  resp.status(statusCode).json({ statusCode, message });
};

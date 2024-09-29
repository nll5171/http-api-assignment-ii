const users = {};

// Takes request, responds with status code and json object
const respondJSON = (request, response, status, object) => {
  const content = JSON.stringify(object);

  // Send response
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(content, 'utf8'),
  });

  // HEAD requests don't get a body, just metadata
  if (request.method !== 'HEAD' && status !== 204) response.write(content); 

  response.end();
};

// Returns the list of users as a JSON object
const getUsers = (request, response) => {
  const responseJSON = {
    users,
  };

  return respondJSON(request, response, 200, responseJSON);
};

// Adds new user if they don't exist, updates age otherwise
const updateUser = (request, response) => {
    const newUser = {

    };
}

// Page doesn't exist, returns 404
const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you were looking for was not found',
    id: 'notFound',
  };

  respondJSON(request, response, 404, responseJSON);
};

module.exports = {
  getUsers,
  notFound,
};
